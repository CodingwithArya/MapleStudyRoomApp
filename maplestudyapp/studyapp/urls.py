from django.urls import path
from .views import api_rooms

urlpatterns = [
    path('api/rooms/', api_rooms, name='api_rooms'),
]
