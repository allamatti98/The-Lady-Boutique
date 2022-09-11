from django.shortcuts import render
from django.views.generic import ListView, DetailView
from .models import Item

def checkout(request):
    return render(request,'CheckOut.html',{})

class HomeView(ListView):
    model = Item
    template_name = "HomePage.html"

class ItemDetailView(DetailView):
    model = Item
    template_name = "productpage.html"