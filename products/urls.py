from django.urls import path
from . import views

urlpatterns = [
    path('login/',views.loginredirect, name = 'index')
]