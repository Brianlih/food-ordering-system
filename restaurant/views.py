from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import UserSerializer, CategorySerializer, MealSerializer, QRcodeSerializer
from .models import Category, Meal, QRcode, User

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
def get_meals(request):
    meals = Meal.objects.all()
    serializer = MealSerializer(meals, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def get_qrcodes(request):
    qrcodes = QRcode.objects.all()
    serializer = QRcodeSerializer(qrcodes, many=True)
    return Response(serializer.data)
