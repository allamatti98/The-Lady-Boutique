from django.contrib import admin
from . models import Customer

class CustomerAdmin(admin.ModelAdmin):
    list_display = ('id_user', 'user','contact','gender','location')

admin.site.register(Customer,CustomerAdmin)