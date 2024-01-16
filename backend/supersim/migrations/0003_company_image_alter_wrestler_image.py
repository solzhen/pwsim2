# Generated by Django 5.0.1 on 2024-01-15 19:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('supersim', '0002_wrestler_gender'),
    ]

    operations = [
        migrations.AddField(
            model_name='company',
            name='image',
            field=models.ImageField(blank=True, null=True, upload_to='companies/'),
        ),
        migrations.AlterField(
            model_name='wrestler',
            name='image',
            field=models.ImageField(blank=True, null=True, upload_to='people/'),
        ),
    ]