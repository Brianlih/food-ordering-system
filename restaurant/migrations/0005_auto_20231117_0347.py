# Generated by Django 4.2.5 on 2023-11-17 03:47

from django.db import migrations

def set_default_table(apps, schema_editor):
    Order = apps.get_model('restaurant', 'Order')
    Table = apps.get_model('restaurant', 'Table')

    default_table = Table.objects.get(name='A1')

    for order in Order.objects.filter(table__isnull = True):
        order.table = default_table
        order.save()


class Migration(migrations.Migration):

    dependencies = [
        ('restaurant', '0004_alter_category_options_and_more'),
    ]

    operations = [
        migrations.RunPython(set_default_table),
    ]
