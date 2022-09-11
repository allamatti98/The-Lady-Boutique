from django.urls import path
from . import views

app_name = 'orders'

urlpatterns = [
    path('',views.HomeView.as_view(), name = 'home'),
    path('checkout/',views.checkout, name = 'checkout'),
    path('product/<slug>/',views.ItemDetailView.as_view(), name = 'productpage')
]