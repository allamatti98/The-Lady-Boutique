# Generated by Django 4.0.5 on 2022-09-12 04:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('orders', '0004_item_discount_price'),
    ]

    operations = [
        migrations.AddField(
            model_name='item',
            name='description',
            field=models.TextField(default='Testing the Descripton Fields'),
            preserve_default=False,
        ),
    ]