from django.shortcuts import render, redirect
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout
from django.contrib import messages
from customers.models import Customer


def signuppage(request):    
    if request.method == 'POST':
        username = request.POST['Username']
        email = request.POST['Email']
        contact = request.POST['Contact']
        gender = request.POST['Gender']
        location = request.POST['Location']
        password1 = request.POST['Password1']
        password2 = request.POST['Password2']

        print(request.POST)

        if password1 == password2:
            if User.objects.filter(email = email).exists():
                messages.info(request, 'Sorry, this email is already taken')
                return redirect('signup')
            elif User.objects.filter(username = username).exists():
                messages.info(request,'This username is nolonger available')
                return redirect('signup')
            else:
                user = User.objects.create_user(username = username, email = email, password = password1)
                user.save()

                user_model = User.objects.get(username = username)
                new_profile = Customer.objects.create(user = user_model, id_user = user_model.id, contact = contact, gender = gender, location = location)
                new_profile.save()
                return redirect('login')
                pass
        else:
            messages.info(request,'Passwords do not match')
            return redirect ('signup')
    else:
        return render(request,'SignUp.html',{})

def loginpage(request):
    if request.method == 'POST':
        username = request.POST['Username']
        password = request.POST['Password']

        user = authenticate(username = username, password = password)

        if user is not None:
            login(request, user)
            return redirect ('/')
        else:
            messages.info(request,'Username or Password is Incorrect. Credentials are Case-Sensitive')
            return redirect ('login')
    else:
        return render(request,'Login.html',{})

def logoutview(request):
    logout(request)
    return redirect('/')