from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()

class Customer(models.Model):
    user = models.ForeignKey(User, on_delete = models.CASCADE)
    full_name = models.CharField(max_length=20)
    id_user = models.IntegerField()
    profilepicture = models.ImageField(upload_to = 'profile_pictures', default = 'Default.jpg')
    contact = models.CharField(max_length = 14)
    gender = models.CharField(max_length=12)
    location = models.CharField(max_length=20, blank=True)

    def ___str__(self):
        return self.user.username