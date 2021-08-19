from django.contrib import admin
from .models import Restaurants

class RestaurantsAdmin(admin.ModelAdmin):
    list_display = ('name', 'address', 'city')

# Register your models here.
admin.site.register(Restaurants, RestaurantsAdmin)
