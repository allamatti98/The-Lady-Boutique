from django.shortcuts import render, redirect, get_object_or_404
from django.views.generic import ListView, DetailView
from .models import Item, OrderItem, Order
from django.utils import timezone

def products(request):
    context = {
        'items': Item.objects.all()
    }
    return render(request,'productpage.html', context)

def checkout(request):
    return render(request,'CheckOut.html',{})

class HomeView(ListView):
    model = Item
    template_name = "HomePage.html"

class ItemDetailView(DetailView):
    model = Item
    template_name = "productpage.html"

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
        else:
            order.items.add(order_item)
    else:
        ordered_date = timezone.now()
        order = Order.objects.create(user= request.user, ordered_date = ordered_date)
        order.items.add(order_item)
    return redirect("orders:productpage", slug=slug)