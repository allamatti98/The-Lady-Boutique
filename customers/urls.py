from django.urls import path
from . import views

urlpatterns =[
    path('signup/',views.signuppage, name ='signup')
]