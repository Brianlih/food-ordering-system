from django.urls import path
from . import views

urlpatterns = [
    # For menu page
    path('<str:restId>/categories/', views.get_specific_categories, name="specific_categories"),

    # For items list page
    path('<str:catId>/items/', views.get_items_in_specific_category, name="items_in_specific_category"),
    path('<str:restId>/description/', views.get_specific_description, name="specific_description"),

    # For item page
    path('item/<str:itemId>/', views.get_specific_item, name="specific_item"),
    
    # For customers
    path('qrcodes/', views.get_qrcodes, name="qrcodes"),

    # For testing
    path('users/', views.get_users, name="users"),
    path('categories/', views.get_categories, name="categories"),
    path('items/', views.get_items, name="items"),
    path('items/<str:itemId>/', views.get_item, name="item"),
]