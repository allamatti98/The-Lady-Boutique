from django.shortcuts import render

def signuppage(request):
    return render(request,'SignUp.html',{})