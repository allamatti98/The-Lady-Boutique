from django.urls import path
from . import views
from django.contrib import admin

app_name = 'orders'

urlpatterns = [
    path('',views.HomeView.as_view(), name = 'home'),
    path('checkout/',views.CheckoutView.as_view(), name = "checkout"),
    path('products/<slug>/',views.ItemDetailView.as_view(), name = 'productpage'),
    path('add_to_cart/<slug>/',views.add_to_cart, name = 'add_to_cart'),
    path('remove_from_cart/<slug>/', views.remove_from_cart, name = 'remove_from_cart'),
    path('order-summary/',views.OrderSummary.as_view(), name = 'order-summary'),
    path('remove_item_from_cart/<slug>/',views.remove_single_item_from_cart, name="remove-single-item-from-cart"),
    # path('payment/<payment_option>/', views.PaymentView, name = 'paymentmethod'),
    path('admin/', admin.site.urls),
    path('cancel/', views.CancelView.as_view(), name='cancel'),
    path('success/', views.SuccessView.as_view(), name='success'),
    path('create-checkout-session/<pk>/', views.CreateCheckoutSessionView.as_view(), name='create-checkout-session'),
    path('orders/checkout/Stripe', views.StripeLanding, name = 'stripelanding')
]