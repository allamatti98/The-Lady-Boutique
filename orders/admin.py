from django.contrib import admin
from . models import Item, OrderItem, Order, StripePrice, Payment, Coupon


class PriceInlineAdmin(admin.TabularInline):
    model = StripePrice
    extra = 0

class ItemAdmin(admin.ModelAdmin):
    inlines = [PriceInlineAdmin]

class OrderAdmin(admin.ModelAdmin):
    list_display = ('user', 'ordered')


admin.site.register(Item,ItemAdmin)

admin.site.register(OrderItem)

admin.site.register(Order, OrderAdmin)

admin.site.register(Payment)

admin.site.register(Coupon)