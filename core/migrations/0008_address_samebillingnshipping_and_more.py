# Generated by Django 4.1 on 2022-10-11 16:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0007_remove_address_address_type_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='address',
            name='samebillingnshipping',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='address',
            name='savedefaultbilling',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='address',
            name='savedefaultshipping',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='address',
            name='usedefaultbilling',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='address',
            name='usedefaultshipping',
            field=models.BooleanField(default=False),
        ),
    ]