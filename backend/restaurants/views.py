from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import viewsets
from .serializers import RestaurantSerializer
from .models import Restaurants

class RestaurantsView(viewsets.ModelViewSet):
    serializer_class = RestaurantSerializer
    queryset = Restaurants.objects.all()

def index(request):
   return render(request, 'index.html')
