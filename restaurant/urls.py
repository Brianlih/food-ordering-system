from django.urls import path
from . import views

urlpatterns = [
    path('restaurants/', views.get_restaurants, name="restaurants"),
    path('categories/', views.get_categories, name="categories"),
    path('meals/', views.get_meals, name="meals"),
    path('qrcodes/', views.get_qrcodes, name="qrcodes"),
]