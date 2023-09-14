from django.db import models
from django.contrib.auth.models import AbstractUser, AbstractBaseUser, PermissionsMixin
from phonenumber_field.modelfields import PhoneNumberField

class User(AbstractUser, AbstractBaseUser, PermissionsMixin):
    address = models.TextField(null=True, blank=True)
    phone = PhoneNumberField(blank=True)
    description = models.TextField(null=True, blank=True)
    updated = models.DateTimeField(auto_now=True)

    REQUIRED_FIELDS = []
    USERNAME_FIELD = 'username'

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
    name = models.CharField(max_length=50)
    restaurant = models.ForeignKey(User, related_name='meals', on_delete=models.CASCADE)
    price = models.IntegerField()
    is_set = models.BooleanField(default=False)
    vegetarian = models.BooleanField(default=False)
    category = models.ForeignKey(Category, related_name='meals', on_delete=models.SET_NULL, null=True)
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
