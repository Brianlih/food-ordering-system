from rest_framework.serializers import ModelSerializer
from .models import Category, Meal, QRcode, User

class UserSerializer(ModelSerializer):
    class Meta:
        model = User
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