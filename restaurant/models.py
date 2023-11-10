from django.db import models
from django.contrib.auth.models import AbstractUser
from phonenumber_field.modelfields import PhoneNumberField

class User(AbstractUser):
    name = models.CharField(max_length=200, null=True)
    email = models.EmailField(unique=True, null=True)
    address = models.TextField(null=True, blank=True)
    phone = PhoneNumberField(blank=True)
    description = models.TextField(null=True, blank=True)
    updated = models.DateTimeField(auto_now=True)

    REQUIRED_FIELDS = []
    USERNAME_FIELD = 'email'

class Category(models.Model):
    name = models.CharField(max_length=100)
    restaurant = models.ForeignKey(User, related_name='categories', on_delete=models.CASCADE)
    description = models.TextField(null=True, blank=True)
    order = models.IntegerField(default=1)
    updated = models.DateTimeField(auto_now=True)
    created = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['order']
    
    def __str__(self):
        return self.name

class Item(models.Model):
    name = models.CharField(max_length=200)
    restaurant = models.ForeignKey(User, related_name='items', on_delete=models.CASCADE)
    price = models.IntegerField()
    # flavour = models.ManyToManyField(blank=True)
    is_set = models.BooleanField(default=False)
    vegetarian = models.BooleanField(default=False)
    category = models.ForeignKey(Category, related_name='items', on_delete=models.SET_NULL, null=True)
    image = models.ImageField(upload_to="./", blank=True, null=True)
    description = models.TextField(null=True, blank=True)
    updated = models.DateTimeField(auto_now=True)
    created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name

class QRcode(models.Model):
    restaurant = models.ForeignKey(User, related_name='QRcodes', on_delete=models.CASCADE)
    table = models.CharField(max_length=200)
    updated = models.DateTimeField(auto_now=True)
    created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.table
    
# class Flavour(models.Model):
#     name = models.CharField(max_length=100)
#     extra_price = models.DecimalField(max_digits=6, decimal_places=2)
#     restaurant = models.ForeignKey(User, related_name='restaurant_flavours', on_delete=models.CASCADE)
#     item = models.ForeignKey(Item, related_name='item_flavours', on_delete=models.CASCADE)
    
class Order(models.Model):
    restaurant = models.ForeignKey(User, related_name='restaurant_orders', on_delete=models.CASCADE)
    items = models.ManyToManyField(Item, through='OrderedItem', related_name='ordered_items', blank=True)
    order_date = models.DateTimeField(auto_now_add=True)

    def total(self):
        total_price = 0
        for ordered_item in self.ordered_items.all():
            total_price += ordered_item.item.price * ordered_item.quantity
        return total_price

class OrderedItem(models.Model):
    item = models.ForeignKey(Item, on_delete=models.CASCADE)
    order = models.ForeignKey(Order, on_delete=models.CASCADE)
    quantity = models.IntegerField()
