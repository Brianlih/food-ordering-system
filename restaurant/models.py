from django.db import models
from django.contrib.auth.models import AbstractUser
from phonenumber_field.modelfields import PhoneNumberField

class User(AbstractUser):
    name = models.CharField(max_length=200, null=True)
    email = models.EmailField(unique=True, null=True)
    address = models.TextField(null=True, blank=True)
    phone = PhoneNumberField(blank=True)
    description = models.TextField(null=True, blank=True)
    is_available = models.BooleanField(default=True)
    updated = models.DateTimeField(auto_now=True)
    created = models.DateTimeField(auto_now_add=True)

    REQUIRED_FIELDS = []
    USERNAME_FIELD = 'email'

class Category(models.Model):
    name = models.CharField(max_length=100)
    restaurant = models.ForeignKey(User, related_name='categories', on_delete=models.CASCADE)
    description = models.TextField(null=True, blank=True)
    showing_order = models.IntegerField(default=1)
    updated = models.DateTimeField(auto_now=True)
    created = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['showing_order']
    
    def __str__(self):
        return self.name

class Item(models.Model):
    name = models.CharField(max_length=200)
    restaurant = models.ForeignKey(User, related_name='restaurant_items', on_delete=models.CASCADE)
    price = models.IntegerField()
    is_set = models.BooleanField(default=False)
    vegetarian = models.BooleanField(default=False)
    category = models.ForeignKey(Category, related_name='category_items', on_delete=models.SET_NULL, null=True)
    image = models.ImageField(upload_to="./", blank=True, null=True)
    description = models.TextField(null=True, blank=True)
    is_available = models.BooleanField(default=True)
    updated = models.DateTimeField(auto_now=True)
    created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name
    
class OptionGroup(models.Model):
    name = models.CharField(max_length=100)
    item = models.ForeignKey(Item, related_name='option_groups', on_delete=models.CASCADE)
    is_required = models.BooleanField(default=False)
    updated = models.DateTimeField(auto_now=True)
    created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name

class Option(models.Model):
    name = models.CharField(max_length=100)
    extra_price = models.DecimalField(max_digits=6, decimal_places=2, default=0.00)
    is_available = models.BooleanField(default=True)
    option_group = models.ForeignKey(OptionGroup, related_name='options', on_delete=models.CASCADE)
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
    
class Table(models.Model):
    restaurant = models.ForeignKey(User, related_name='tables', on_delete=models.CASCADE)
    name = models.CharField(max_length=20)
    number_of_seats = models.IntegerField(default=2)
    updated = models.DateTimeField(auto_now=True)
    created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name

class Order(models.Model):
    restaurant = models.ForeignKey(User, related_name='restaurant_orders', on_delete=models.CASCADE)
    table = models.ForeignKey(Table, related_name='orders', on_delete=models.SET_NULL, null=True)
    items = models.ManyToManyField(Item, through='OrderedItem', related_name='ordered_items', blank=True)
    is_paid = models.BooleanField(default=False)
    is_completed = models.BooleanField(default=False)
    order_date = models.DateTimeField(auto_now_add=True)

    def total(self):
        total_price = 0
        for ordered_item in self.ordered_items.all():
            total_price += ordered_item.item.price * ordered_item.quantity
        return total_price
    
    def __str__(self):
        formatted_date = self.order_date.strftime('%Y%m%d')
        return formatted_date + '__' + self.table.name

class OrderedItem(models.Model):
    item = models.ForeignKey(Item, on_delete=models.CASCADE)
    order = models.ForeignKey(Order, on_delete=models.CASCADE)
    quantity = models.IntegerField(default=0, blank=True, null=True)
    created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.item.name
