from rest_framework.serializers import ModelSerializer
from .models import Category, Item, QRcode, User, OrderedItem

class UserSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

class CategorySerializer(ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'

class ItemSerializer(ModelSerializer):
    class Meta:
        model = Item
        fields = '__all__'

class OrderedItemSerializer(ModelSerializer):
    class Meta:
        model = OrderedItem
        fields = '__all__'

class QRcodeSerializer(ModelSerializer):
    class Meta:
        model = QRcode
        fields = '__all__'
