from django.urls import path, include
from rest_framework.routers import DefaultRouter;
from .views import LoungeViewSet;

# from .views import api_rooms

router = DefaultRouter();
router.register(r'lounges', LoungeViewSet);

urlpatterns = [
    path('', include(router.urls)),
]

