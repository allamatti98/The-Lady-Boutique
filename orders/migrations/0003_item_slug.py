# Generated by Django 4.0.5 on 2022-09-11 16:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('orders', '0002_item_category_item_label'),
    ]

    operations = [
        migrations.AddField(
            model_name='item',
            name='slug',
            field=models.SlugField(default='slug1'),
            preserve_default=False,
        ),
    ]
