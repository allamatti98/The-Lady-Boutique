# Generated by Django 4.1 on 2022-10-04 17:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='item',
            name='label',
            field=models.CharField(choices=[('T', 'Trending'), ('N', 'New'), ('L', 'Limited')], max_length=1),
        ),
    ]