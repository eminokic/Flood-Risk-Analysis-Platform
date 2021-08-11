# Test comment
from django.db import models

# Create your models here.
class Restaurants(models.Model):
    name = models.CharField(max_length=120)
    address = models.CharField(max_length=200)
    city = models.CharField(max_length=120)
    maps_rating = models.IntegerField(default=0)

# Setting Up Representation of Restaurant Object ...
    def __str__(self):
        return self.name
