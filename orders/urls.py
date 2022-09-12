from django.urls import path
from . import views

app_name = 'orders'

urlpatterns = [
    path('',views.HomeView.as_view(), name = 'home'),
    path('checkout/',views.checkout, name = 'checkout'),
    path('products/<slug>/',views.ItemDetailView.as_view(), name = 'productpage'),
    path('add_to_cart/<slug>/',views.add_to_cart, name = 'add_to_cart'),
    path('remove_from_cart/<slug>/', views.remove_from_cart, name = 'remove_from_cart')
]