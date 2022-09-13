from django.shortcuts import render, redirect, get_object_or_404
from django.views.generic import ListView, DetailView, View
from .models import Item, OrderItem, Order
from django.utils import timezone
from django.contrib import messages
from django.core.exceptions import ObjectDoesNotExist
from django.contrib.auth.decorators import login_required
from django.contrib.auth.mixins import LoginRequiredMixin
from django.contrib.auth.models import User



def products(request):
    context = {
        'items': Item.objects.all()
    }
    return render(request,'productpage.html', context)


def checkout(request):
    return render(request,'CheckOut.html',{})


class HomeView(ListView):
    model = Item
    paginate_by = 1
    template_name = "HomePage.html"


class OrderSummary(LoginRequiredMixin, View):
    def get(self, *args, **kwargs):
            try:
                order = Order.objects.get(user=self.request.user, ordered= False)
                return render(self.request,"OrderSummary.html" )
            except ObjectDoesNotExist:
                messages.error(self.request, 'You do not have an active order')
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
    