from rest_framework import serializers
from .models import Restaurants

# Creates Serializer to convert CSV to JSON
class RestaurantSerializer(serializers.ModelSerializer):
    class Meta:
        model = Restaurants
        fields = ('name', 'address', 'city')
