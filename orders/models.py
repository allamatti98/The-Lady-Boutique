from django.db import models
from django.conf import settings
from django.contrib.auth import get_user_model

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
    price = models.IntegerField()
    category = models.CharField(choices= Category_choices, max_length=2)
    label = models.CharField(choices= label_choices, max_length=1)

    def __str__(self):
       return self.title

class OrderItem(models.Model):
    item = models.ForeignKey(Item, on_delete= models.CASCADE)
    
    def __str__(self):
        return self.title


class Order(models.Model): #Shopping Cart
    user = models.ForeignKey(User, on_delete= models.CASCADE)
    items = models.ManyToManyField(OrderItem)
    start_date = models.DateTimeField(auto_now_add=True)
    ordered_date = models.DateTimeField()
    ordered = models.BooleanField(default= False)

    def __str__(self):
        return self.user.username