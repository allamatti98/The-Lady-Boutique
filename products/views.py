from django.shortcuts import render, redirect

def index(request):
    return render(request, "Index.html",{})

def loginredirect(request):
    return redirect('login')