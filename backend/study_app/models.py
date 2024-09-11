from django.db import models

class Lounge(models.Model):
    #fields
    floor = models.CharField(max_length=10);
    room = models.CharField(max_length=10);
    availability = models.CharField(max_length= 10, choices=[('Available', 'Available'), ('Occupied', 'Occupied')]);


def __str__ (self):
    return f'{self.room} on floor {self.floor} - {self.availability}';



    