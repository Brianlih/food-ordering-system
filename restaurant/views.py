from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import UserSerializer, CategorySerializer, ItemSerializer, QRcodeSerializer
from .models import Category, Item, QRcode, User

@api_view(['GET'])
def get_specific_categories(request, restId):
    restaurant = User.objects.get(id=restId)
    categories = Category.objects.filter(restaurant=restaurant)
    serializer = CategorySerializer(categories, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def get_specific_about(request, restId):
    restaurant = User.objects.get(id=restId)
    return Response(restaurant.description)

@api_view(['GET'])
def get_specific_user(request, restId):
    restaurant = User.objects.get(id=restId)
    serializer = UserSerializer(restaurant)
    return Response(serializer.data)

@api_view(['GET'])
def get_items_in_specific_category(request, catId):
    category = Category.objects.get(id=catId)
    items = Item.objects.filter(category=category)
    serializer = ItemSerializer(items, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def get_specific_item(request, itemId):
    item = Item.objects.get(id=itemId)
    serializer = ItemSerializer(item)
    return Response(serializer.data)

@api_view(['GET'])
def get_qrcodes(request):
    qrcodes = QRcode.objects.all()
    serializer = QRcodeSerializer(qrcodes, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def get_users(request):
    users = User.objects.all()
    serializer = UserSerializer(users, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def get_categories(request):
    categories = Category.objects.all()
    serializer = CategorySerializer(categories, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def get_items(request):
    items = Item.objects.all()
    serializer = ItemSerializer(items, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def get_item(request, itemId):
    item = Item.objects.get(id=itemId)
    serializer = ItemSerializer(item)
    return Response(serializer.data)
