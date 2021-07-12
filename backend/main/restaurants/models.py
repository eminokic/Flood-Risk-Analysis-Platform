from django.db import models

# Create your models here.
class Restaurant(models.Model):
    building_id = models.IntegerField()
    address = models.CharField(max_length=200)
    postal_code = models.IntegerField(default=0)
    risk_value = models.IntegerField(default=0)

    # Setting Up Representation of Restaurant Object
    def __str__(self):
        return self.building_id