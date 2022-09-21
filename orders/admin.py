from django.contrib import admin
from . models import Item, OrderItem, Order, StripePrice, Payment


class PriceInlineAdmin(admin.TabularInline):
    model = StripePrice
    extra = 0

class ItemAdmin(admin.ModelAdmin):
    inlines = [PriceInlineAdmin]


admin.site.register(Item,ItemAdmin)

admin.site.register(OrderItem)

admin.site.register(Order)

admin.site.register(Payment)