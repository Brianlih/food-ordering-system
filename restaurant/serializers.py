from rest_framework.serializers import ModelSerializer
from .models import Restaurant, Category, Meal, QRcode

class RestaurantSerializer(ModelSerializer):
    class Meta:
        model = Restaurant
        fields = '__all__'

class CategorySerializer(ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'

class MealSerializer(ModelSerializer):
    class Meta:
        model = Meal
        fields = '__all__'

class QRcodeSerializer(ModelSerializer):
    class Meta:
        model = QRcode
        fields = '__all__'