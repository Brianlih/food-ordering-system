from django.contrib import admin
from .models import Item, Category, QRcode, User

admin.site.register(User)
# admin.site.register(Restaurant)
admin.site.register(Item)
admin.site.register(Category)
admin.site.register(QRcode)
