from django.db import models

# Create your models here.
class States(models.Models):
    state_name = models.CharField(max_length=15)

def __str__(self):
    return self.building_id
