from django.urls import path
from . import views

urlpatterns = [
    path('users/', views.get_users, name="users"),
    path('categories/', views.get_categories, name="categories"),
    path('meals/', views.get_meals, name="meals"),
    path('qrcodes/', views.get_qrcodes, name="qrcodes"),
]