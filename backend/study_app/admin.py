from django.contrib import admin
from .models import Lounge

@admin.register(Lounge)
class LoungeAdmin(admin.ModelAdmin):
    list_display = ('floor', 'room', 'availability')
    # Add other configurations if needed
