from django.contrib import admin
from .models import Meal, Category, QRcode, User

admin.site.register(User)
# admin.site.register(Restaurant)
admin.site.register(Meal)
admin.site.register(Category)
admin.site.register(QRcode)
