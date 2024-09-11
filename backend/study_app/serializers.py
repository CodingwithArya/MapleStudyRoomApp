#converts Django model/database to JSON that frontend can understand

from rest_framework import serializers;
from .models import Lounge;

class LoungeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Lounge;
        fields = '___all___';