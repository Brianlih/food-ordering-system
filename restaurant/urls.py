from django.urls import path
from . import views

urlpatterns = [
    path('users/', views.get_users, name="users"),
    path('categories/', views.get_categories, name="categories"),
    path('items/', views.get_items, name="items"),
    path('items/<str:pk>/', views.get_item, name="item"),
    path('qrcodes/', views.get_qrcodes, name="qrcodes"),
]