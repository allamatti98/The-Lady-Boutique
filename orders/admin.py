from django.contrib import admin
from . models import Item, OrderItem, Order, StripePrice, Payment, Coupon, Refund




def make_refund_accepted(modeladmin, request, queryset):
    queryset.update(refund_requests = False, refund_granted= True)


make_refund_accepted.short_description = 'Update orders to refund granted'




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
    actions = [make_refund_accepted]





admin.site.register(Item,ItemAdmin)

admin.site.register(OrderItem)

admin.site.register(Order, OrderAdmin)

admin.site.register(Payment)

admin.site.register(Coupon)