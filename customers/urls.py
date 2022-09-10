from django.urls import path
from . import views

urlpatterns =[
    path('signup/',views.signuppage, name ='signup'),
    path('login/',views.loginpage, name = 'login'),
    path('logout/',views.logoutview, name = 'logout')
]