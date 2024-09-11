# Generated by Django 4.2.13 on 2024-08-31 22:06

from django.db import migrations

def create_initial_lounges(apps, schema_editor):
    Lounge = apps.get_model('study_app', 'Lounge')
    
    lounges = [
        {"floor": "3rd", "room": "302A", "availability": "Available"},
        {"floor": "4th", "room": "402A", "availability": "Available"},
        {"floor": "4th", "room": "402C", "availability": "Available"},
        {"floor": "4th", "room": "402D", "availability": "Available"},
        {"floor": "5th", "room": "502A", "availability": "Available"},
        {"floor": "5th", "room": "502C", "availability": "Available"},
        {"floor": "5th", "room": "502D", "availability": "Available"},
        {"floor": "6th", "room": "602A", "availability": "Available"},
        {"floor": "6th", "room": "602C", "availability": "Available"},
        {"floor": "6th", "room": "602D", "availability": "Available"},
        {"floor": "7th", "room": "702A", "availability": "Available"},
        {"floor": "7th", "room": "702C", "availability": "Available"},
        {"floor": "7th", "room": "702D", "availability": "Available"},
        {"floor": "8th", "room": "802A", "availability": "Available"},
        {"floor": "8th", "room": "802C", "availability": "Available"},
        {"floor": "8th", "room": "802D", "availability": "Available"},
    ]

    for lounge in lounges:
        Lounge.objects.create(**lounge)


class Migration(migrations.Migration):

    dependencies = [
        ('study_app', '0001_initial'),
    ]

    operations = [
        migrations.RunPython(create_initial_lounges),
    ]