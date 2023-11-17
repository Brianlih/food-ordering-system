from django.contrib import admin
from .models import Item, Category, QRcode, User, Order, OrderedItem, Option, OptionGroup, Table

admin.site.register(User)
# admin.site.register(Restaurant)
admin.site.register(Item)
admin.site.register(Category)
admin.site.register(QRcode)
admin.site.register(Order)
admin.site.register(OrderedItem)
admin.site.register(OptionGroup)
admin.site.register(Option)
admin.site.register(Table)
