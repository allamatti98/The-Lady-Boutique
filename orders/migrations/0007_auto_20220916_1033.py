# Generated by Django 2.2 on 2022-09-16 07:33

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('orders', '0006_auto_20220915_1358'),
    ]

    operations = [
        migrations.AddField(
            model_name='item',
            name='stripe_product_id',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
        migrations.CreateModel(
            name='Stripe_Price',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('stripe_price_id', models.CharField(max_length=100)),
                ('price', models.IntegerField(default=0)),
                ('product', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='orders.Item')),
            ],
        ),
    ]