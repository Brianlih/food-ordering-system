from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import RestaurantSerializer, CategorySerializer, MealSerializer, QRcodeSerializer
from .models import Restaurant, Category, Meal, QRcode

@api_view(['GET'])
def get_restaurants(request):
    restaurants = Restaurant.objects.all()
    serializer = RestaurantSerializer(restaurants, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def get_categories(request):
    categories = Category.objects.all()
    serializer = CategorySerializer(categories, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def get_meals(request):
    meals = Meal.objects.all()
    serializer = MealSerializer(meals, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def get_qrcodes(request):
    qrcodes = QRcode.objects.all()
    serializer = QRcodeSerializer(qrcodes, many=True)
    return Response(serializer.data)
