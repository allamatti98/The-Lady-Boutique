from django.urls import path
from .views import ( UserEmailView, UserIDView, ItemListView, ItemDetailView, AddToCartView, OrderDetailView, OrderQuantityUpdateView,
                     AddCouponView, CountryListView, AddressListView, AddressCreateView, 
                    AddressUpdateView, AddressDeleteView,  OrderItemDeleteView, PaymentListView,
                    CreateWishlist, ShowWishlist, DeleteWishItem, ShowAddresses, CreateCheckoutSessionView, UserNameView
                     )

urlpatterns = [
     path('user-id/', UserIDView.as_view(), name='user-id'),
     path('username/', UserNameView.as_view(), name = 'username'),
     path('countries/', CountryListView.as_view(), name='country-list'),
     path('addresses/', ShowAddresses.as_view(), name='address-list'),
     path('addresses/create/', AddressCreateView.as_view(), name='address-create'),
     path('addresses/<pk>/update/',
          AddressUpdateView.as_view(), name='address-update'),
     path('addresses/<pk>/delete/',
          AddressDeleteView.as_view(), name='address-delete'),
     path('products/', ItemListView.as_view(), name='product-list'),
     path('products/<pk>/', ItemDetailView.as_view(), name='product-detail'),
     path('add-to-cart/', AddToCartView.as_view(), name='add-to-cart'),
     path('order-summary/', OrderDetailView.as_view(), name='order-summary'),
     path('add-coupon/', AddCouponView.as_view(), name='add-coupon'),
     path('order-items/<pk>/delete/',
          OrderItemDeleteView.as_view(), name='order-item-delete'),
     path('order-item/update-quantity/',
          OrderQuantityUpdateView.as_view(), name='order-item-update-quantity'),
     path('payments/', PaymentListView.as_view(), name='payment-list'),
     path('wishlist/', CreateWishlist.as_view(), name = 'wishlist'),
     path('showwishlist/',ShowWishlist.as_view(), name = 'show-wishlist'),
     path('wishlist/<wished_item>/delete/', DeleteWishItem.as_view(), name = 'delete-wish-item'),
     path('stripe-landing/', CreateCheckoutSessionView.as_view(), name='stripelanding'),
     path('email/', UserEmailView.as_view(), name ='email')
]
