# Generated by Django 4.2.5 on 2023-09-18 07:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('restaurant', '0005_remove_user_avatar_user_image'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='user',
            name='image',
        ),
        migrations.AddField(
            model_name='item',
            name='image',
            field=models.ImageField(blank=True, null=True, upload_to=''),
        ),
    ]
