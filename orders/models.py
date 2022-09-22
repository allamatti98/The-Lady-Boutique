from django.db import models
from django.conf import settings
from django.contrib.auth import get_user_model
from django.urls import reverse
from django_countries import fields

User = get_user_model()
Category_choices = (
    ('S','Skirt'),
    ('D','Dress'),
    ('B','Blouse')
)

label_choices = (
    ('P','primary'),
    ('S','secondary'),
    ('D','danger')
)

class Item(models.Model):
    title = models.CharField(max_length= 100)
    stripe_price_id = models.CharField(max_length=100, blank=True, null=True)
    price = models.IntegerField(default = 0)
    discount_price = models.FloatField(blank= True, null= True)
    category = models.CharField(choices= Category_choices, max_length=2)
    label = models.CharField(choices= label_choices, max_length=1)
    slug = models.SlugField()
    description = models.TextField()
    image = models.ImageField()

    def __str__(self):
       return self.title

    def get_absolute_url(self):
        return reverse("orders:productpage", kwargs={
            'slug': self.slug
        })
   
    def get_add_to_cart_url(self):
        return reverse("orders:add_to_cart", kwargs={
            'slug': self.slug
        })
        
    def get_remove_from_cart_url(self):
        return reverse("orders:remove_from_cart", kwargs={
            'slug': self.slug
        })

    def get_display_price(self):
        return "{0:.2f}".format (self.price / 100)


class Payment(models.Model):
    user = models.ForeignKey(User, on_delete= models.SET_NULL, blank= True, null= True)
    checkout_session_id = models.CharField(max_length = 100, blank= True, null= True)
    timestamp = models.DateTimeField(auto_now_add= True, blank= True, null = True)
    total = models.FloatField(null = True, blank = True)

    def __str__(self):
        return self.user.username


class StripePrice(models.Model):
    product = models.ForeignKey(Item, on_delete=models.CASCADE)
    stripe_product_id = models.CharField(max_length=100, null= True, blank = True)
    stripe_price_id = models.CharField(max_length=100)

	
    def __str__(self):
        return self.product.title

    def get_display_price(self):
        return "{0:.2f}".format(self.price / 100)



class OrderItem(models.Model):
    user = models.ForeignKey(User, on_delete= models.CASCADE)
    ordered = models.BooleanField(default= False)
    item = models.ForeignKey(Item, on_delete= models.CASCADE)
    quantity = models.IntegerField(default=1)
    
    
    def __str__(self):
        return f"{self.quantity} {self.item.title}"

    def get_total_item_price(self):
        return self.quantity * self.item.price
    
    def get_total_discount_item_price(self):
        return self.quantity * self.item.discount_price
    
    def get_amount_saved(self):
        return self.get_total_item_price() - self.get_total_discount_item_price()
    
    def get_final_price(self):
        if self.item.discount_price:
            return self.get_total_discount_item_price()
        else:
            return self.get_total_item_price()





class Order(models.Model): #Shopping Cart
    user = models.ForeignKey(User, on_delete= models.CASCADE)
    items = models.ManyToManyField(OrderItem)
    start_date = models.DateTimeField(auto_now_add=True)
    ordered_date = models.DateTimeField()
    ordered = models.BooleanField(default= False)
    billing_address = models.ForeignKey('BillingAddress', on_delete=models.SET_NULL, blank=True, 
    null=True)
    payment = models.ForeignKey('Payment', on_delete= models.SET_NULL, blank= True, null= True)
    coupon = models.ForeignKey('Coupon', on_delete= models.SET_NULL, blank= True , null= True)


    def __str__(self):
        return self.user.username
  
    def get_total(self):
        total = 0
        for order_item in self.items.all():
            total += order_item.get_final_price()
        return total

class BillingAddress(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    country = fields.CountryField(multiple=False)
    city = models.CharField(max_length=15)
    street_address= models.CharField(max_length=50)
    apartment_address = models.CharField(max_length=50)
    

    def __str__(self):
        return self.user.username
    
class Coupon(models.Model):
    code = models.CharField(max_length = 20)

    def __str__(self):
        return self.code