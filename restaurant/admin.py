from django.contrib import admin
from .models import Restaurant, Meal, Category, QRcode

# Register your models here.
admin.site.register(Restaurant)
admin.site.register(Meal)
admin.site.register(Category)
admin.site.register(QRcode)
