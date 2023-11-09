from django.contrib import admin
from .models import Item, Category, QRcode, User, Order, OrderedItem

admin.site.register(User)
# admin.site.register(Restaurant)
admin.site.register(Item)
admin.site.register(Category)
admin.site.register(QRcode)
admin.site.register(Order)
admin.site.register(OrderedItem)
