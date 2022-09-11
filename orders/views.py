from django.shortcuts import render
from .models import Item

def item_list(request):
    context ={
        'items': Item.objects.all()
    }
    return render(request,"HomePage.html", context)

def checkout(request):
    return render(request,'CheckOut.html',{})

def productpage(request):
    return render(request,"productpage.html",{})