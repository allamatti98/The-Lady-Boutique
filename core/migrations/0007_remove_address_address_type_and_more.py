# Generated by Django 4.1 on 2022-10-11 05:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0006_address_alternate_contact'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='address',
            name='address_type',
        ),
        migrations.RemoveField(
            model_name='address',
            name='alternate_contact',
        ),
        migrations.RemoveField(
            model_name='address',
            name='apartment_address',
        ),
        migrations.RemoveField(
            model_name='address',
            name='city',
        ),
        migrations.RemoveField(
            model_name='address',
            name='country',
        ),
        migrations.RemoveField(
            model_name='address',
            name='street_address',
        ),
        migrations.AddField(
            model_name='address',
            name='billingalternatecontact',
            field=models.IntegerField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='address',
            name='billingapartmentadress',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
        migrations.AddField(
            model_name='address',
            name='billingcity',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
        migrations.AddField(
            model_name='address',
            name='billingcountry',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
        migrations.AddField(
            model_name='address',
            name='billingingstreetaddress',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
        migrations.AddField(
            model_name='address',
            name='shippingalternatecontact',
            field=models.IntegerField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='address',
            name='shippingapartmentadress',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
        migrations.AddField(
            model_name='address',
            name='shippingcity',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
        migrations.AddField(
            model_name='address',
            name='shippingcountry',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
        migrations.AddField(
            model_name='address',
            name='shippingstreetaddress',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
    ]
