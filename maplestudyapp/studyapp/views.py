from django.shortcuts import render

# Create your views here.
from django.shortcuts import render
from django.http import JsonResponse

def api_rooms(request):
    data = {
        "rooms": [
            {"id": 1, "name": "Room 302A", "isAvailable": True},
            {"id": 2, "name": "Room 402D", "isAvailable": False},
            # Add more room data
        ]
    }
    return JsonResponse(data)
