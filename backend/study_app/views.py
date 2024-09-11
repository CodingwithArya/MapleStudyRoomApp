# Create your views here.
from rest_framework import viewsets
from .models import Lounge
from .serializers import LoungeSerializer

class LoungeViewSet(viewsets.ModelViewSet):
    queryset = Lounge.objects.all();
    serializer_class = LoungeSerializer;