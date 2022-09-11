from django.urls import path
from . import views

app_name = 'orders'

urlpatterns = [
    path('',views.item_list, name = 'order'),
    path('checkout/',views.checkout, name = 'checkout'),
    path('productspage/',views.productpage, name = 'productspage')
]