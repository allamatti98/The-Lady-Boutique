# Generated by Django 4.1 on 2022-10-14 11:07

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0011_wishlist'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='wishlist',
            name='slug',
        ),
    ]