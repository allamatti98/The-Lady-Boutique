from django.contrib import admin
from . models import Item, OrderItem, Order, StripePrice, Payment, Coupon


class PriceInlineAdmin(admin.TabularInline):
    model = StripePrice
    extra = 0

class ItemAdmin(admin.ModelAdmin):
    inlines = [PriceInlineAdmin]

class OrderAdmin(admin.ModelAdmin):
    list_display = ('user', 'ordered','being_delivered','received','refund_requests','refund_granted','user','billing_address', 'payment','coupon')
    list_display_links = ('user','billing_address', 'payment','coupon')
    list_filter = ('ordered','being_delivered','received','refund_requests','refund_granted')
    search_fields = ('user__username','ref_code')

admin.site.register(Item,ItemAdmin)

admin.site.register(OrderItem)

admin.site.register(Order, OrderAdmin)

admin.site.register(Payment)

admin.site.register(Coupon)