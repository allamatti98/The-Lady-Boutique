from django.shortcuts import render, redirect, get_object_or_404
from django.views.generic import ListView, DetailView, View, TemplateView
from .models import Item, OrderItem, Order, Address, Payment, Coupon, Refund
from django.utils import timezone
from django.contrib import messages
from django.core.exceptions import ObjectDoesNotExist
from django.contrib.auth.decorators import login_required
from django.contrib.auth.mixins import LoginRequiredMixin
from django.contrib.auth.models import User
from .forms import CheckOutForm, CouponForm, RefundForm
import stripe
from django.conf import settings
from django.http import JsonResponse
from django.views import View as SView
import random
import string


stripe.api_key = settings.STRIPE_SECRET_KEY

def create_ref_code():
    return ''.join(random.choices(string.ascii_lowercase + string.digits, k = 15))

def products(request):
    context = {
        'items': Item.objects.all()
    }
    return render(request,'productpage.html', context)


class CheckoutView(View):
    def get(self, *args, **kwargs):
        order = Order.objects.get(user = self.request.user, ordered= False)
        form = CheckOutForm()
        context = {
            'form':form,
            "couponform" : CouponForm(),
            "order": order,
        }
        return render(self.request,'CheckOut.html', context)
    
    def post(self, *args, **kwargs):
        form = CheckOutForm(self.request.POST or None)
        try:
            order = Order.objects.get(user=self.request.user, ordered= False)

            #print(self.request.POST)
            if form.is_valid():
             #   print(form.cleaned_data)
              #  print("The Form is valid")
                street_address = form.cleaned_data.get('street_address')
                apartment_address = form.cleaned_data.get('apartment_address')
                country = form.cleaned_data.get('country')
                city = form.cleaned_data.get('city')
                # same_shipping_address = form.cleaned_data.get('same_shipping_address')
                # save_info = form.cleaned_data.get('save_info')
                payment_option = form.cleaned_data.get('payment_option')
                
                
                billing_address = Address(
                    user= self.request.user,
                    street_address = street_address,
                    apartment_address = apartment_address,
                    country = country,
                    city = city,
                    address_type = 'B'
                    )

                billing_address.save()
                order.billing_address = billing_address
                order.save()

                

                if payment_option == 'S':
                    return redirect('orders:stripelanding')
                elif payment_option == 'A':
                    return redirect('orders:adyenlanding')
                elif payment_option == 'P':
                    return redirect( 'orders:paypallanding')
                else:
                    messages.warning(self.request, 'Invalid Payment option')
                    return redirect( 'orders:checkout')

            messages.warning(self.request,"Failed Checkout")
            return redirect('orders:checkout')    
        except ObjectDoesNotExist:
            messages.warning(self.request, 'You do not have an active order')
            return redirect("orders:order-summary") 


class StripeLanding(TemplateView):
    template_name = "Stripe.html"

    def get_context_data(self, **kwargs):
        order = Order.objects.get(user = self.request.user, ordered = False)
        if order.billing_address:

            context = super(StripeLanding,self).get_context_data(**kwargs)
            code = order.coupon.code

            context.update({
                "order": order,
                "STRIPE_PUBLIC_KEY": settings.STRIPE_PUBLIC_KEY,
                "promocode": code,
            })
            return context
        else:
            messages.warning(self.request, "No billing address provided")
            return redirect('orders:checkout')

def AdyenLanding(request):
    return render(request, "Adyen.html", {})

def PayPalLanding(request):
    return render(request, "PayPal.html",{})


        
class HomeView(ListView):
    model = Item
    paginate_by = 2
    template_name = "HomePage.html"



class OrderSummary(LoginRequiredMixin, View):
    def get(self, *args, **kwargs):
            try:
                order = Order.objects.get(user=self.request.user, ordered= False)
                context = {
                    'object': order
                }
                return render(self.request,"OrderSummary.html", context)
            except ObjectDoesNotExist:
                messages.warning(self.request, 'You do not have an active order')
                return redirect("/")        
    

class ItemDetailView(DetailView):
    model = Item
    template_name = "productpage.html"


@login_required
def add_to_cart(request, slug):
    item = get_object_or_404(Item, slug = slug)
    order_item, created = OrderItem.objects.get_or_create(
        item = item,
        user=request.user,
        ordered = False
        )
    order_qs = Order.objects.filter(user = request.user, ordered = False)
    if order_qs.exists():
        order = order_qs[0]
        if order.items.filter(item__slug = item.slug).exists():
            order_item.quantity += 1
            order_item.save()
            messages.info(request, "This item quantity was updated")
            return redirect("orders:productpage", slug = slug)
        else:
            order.items.add(order_item)
            messages.info(request, "This item was added to your cart.")
            return redirect("orders:productpage", slug = slug)
    else:
        ordered_date = timezone.now()
        order = Order.objects.create(user= request.user, ordered_date = ordered_date)
        order.items.add(order_item)
        messages.info(request, "This item was added to your cart.")
    return redirect("orders:productpage", slug=slug)


@login_required
def remove_from_cart(request,slug):
    item = get_object_or_404(Item, slug=slug)
    order_qs = Order.objects.filter(user = request.user, ordered = False)
    if order_qs.exists():
        order = order_qs[0]
        if order.items.filter(item__slug = item.slug).exists():
            order_item = OrderItem.objects.filter(
                item = item,
                user=request.user,
                ordered = False)[0]
            order.items.remove(order_item)
            messages.info(request, "This item was removed from to your cart.")
            return redirect("orders:productpage", slug = slug)
        else:
            messages.info(request, "This item was not in your cart.")
            return redirect("orders:productpage", slug = slug)           
    else:
        messages.info(request, "You do not have an active order")
        return redirect("orders:productpage", slug = slug)


@login_required
def remove_single_item_from_cart(request,slug):
    item = get_object_or_404(Item, slug=slug)
    order_qs = Order.objects.filter(user = request.user, ordered = False)
    if order_qs.exists():
        order = order_qs[0]
        if order.items.filter(item__slug = item.slug).exists():
            order_item = OrderItem.objects.filter(
                item = item,
                user=request.user,
                ordered = False)[0]
            if order_item.quantity > 1:
                order_item.quantity -= 1
                order_item.save()
            else:
                order.items.remove(order_item)    
                

            messages.info(request, "The item quantity was decreased.")
            return redirect("orders:order-summary")
        else:
            messages.info(request, "This item was not in your cart.")
            return redirect("orders:productpage", slug = slug)           
    else:
        messages.info(request, "You do not have an active order")
        return redirect("orders:productpage", slug = slug)

#stripe.api_key = settings.STRIPE_SECRET_KEY



class CreateCheckoutSessionView(View):
    def post(self, request, *args, **kwargs):
        YOUR_DOMAIN = "http://127.0.0.1:8000"  # change in production

        zee = []
        
        order = Order.objects.get(user = self.request.user, ordered = False)
        for item in order.items.all():
            lineitem = {
                    'price': item.item.stripe_price_id,
                    'quantity': item.quantity,
                }
            zee.append(lineitem)
        
        try:
            checkout_session = stripe.checkout.Session.create(
            payment_method_types=['card'],
            line_items = zee,
            mode='payment',
            success_url=YOUR_DOMAIN + '/orders/success/',
            cancel_url=YOUR_DOMAIN + '/orders/cancel/',
        )

            payment = Payment()
            payment.checkout_session_id = checkout_session.id
            payment.user = self.request.user
            payment.timestamp = timezone.now()
            payment.total = order.get_total()
            payment.save()

            order_items = order.items.all()
            order_items.update(ordered = True)
            for item in order_items:
                item.save()

            order.ordered = True
            order.payment = payment
            order.ref_code = create_ref_code()
            order.save()

            messages.success(self.request, "Your payment was successful!")


            return JsonResponse({
                'id': checkout_session.id
            })        

            
        except stripe.error.CardError as e:
            # Since it's a decline, stripe.error.CardError will be caught
            print('Status is: %s' % e.http_status)
            print('Code is: %s' % e.code)
            # param is '' in this case
            print('Param is: %s' % e.param)
            print('Message is: %s' % e.user_message)
            messages.warning(self.request, "Card Declined.")

        except stripe.error.RateLimitError as e:
            messages.warning(self.request, "Too many requests made to the API too quickly.")
            return redirect("/")
            
        except stripe.error.InvalidRequestError as e:
            messages.warning(self.request, "Invalid parameters were supplied to Stripe's API.")
            return redirect("/")

        except stripe.error.AuthenticationError as e:
            messages.warning(self.request, "Authentication with Stripe's API failed, maybe you changed API keys recently")
            return redirect("/")

        except stripe.error.APIConnectionError as e:
            messages.warning(self.request, "Network communication with Stripe failed.")
            return redirect("/")

        except stripe.error.StripeError as e:
            messages.warning(self.request, "General Stripe Error.")
            return redirect("/")

        except Exception as e:
            messages.warning(self.request, "Error completely unrelated to Stripe.")
            return redirect("/")


class SuccessView(TemplateView):
    template_name = "Success.html"


class CancelView(TemplateView):
    template_name = "Cancel.html"

def get_coupon(request, code):
    try:
        coupon = Coupon.objects.get(code = code)
        return coupon
    except ObjectDoesNotExist:
        messages.info(request, "Invalid Coupon")


class AddCoupon(View):
    def post(self, *args, **kwargs):
        form = CouponForm(self.request.POST or None)
        if form.is_valid():
            try:
                code = form.cleaned_data.get('code')
                print(form.cleaned_data)
                order = Order.objects.get( user = self.request.user, ordered = False)
                order.coupon = get_coupon(self.request,code)
                order.save()
                messages.success(self.request, "Coupon Successfully Redeemed")
                return redirect('orders:checkout')
                

            except ObjectDoesNotExist:
                messages.info(self.request, "You do not have an active order.")
                return redirect("orders:checkout")
        else:
            pass

class RequestRefund(View):
    def get(self, *args, **kwargs):
        form = RefundForm()
        context = {
            "form" : form
        }
        return render(self.request,"RefundRequest.html", context)


    def post (self, *args, **kwargs):
        form = RefundForm(self.request.POST)
        if form.is_valid():
            ref_code = form.cleaned_data.get('ref_code')
            message = form.cleaned_data.get('message')
            email = form.cleaned_data.get('email')

            try:
                order = Order.objects.get(ref_code = ref_code)
                order.refund_requests = True
                order.save()

                refund = Refund()
                refund.order = order
                refund.reason = message
                refund.email = email
                refund.save()
                messages.info(self.request, "Your order was received")
                return redirect ("orders:refund")

            except ObjectDoesNotExist:
                messages.info(self.request, "This object does not exist")
                return redirect ("orders:refund")