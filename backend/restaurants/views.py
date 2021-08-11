from django.shortcuts import render
from django.http import HttpResponse
import pandas as pd

from rest_framework import viewsets
from .serializers import RestaurantSerializer
from .models import Restaurants

class RestaurantsView(viewsets.ModelViewSet):
    serializer_class = RestaurantSerializer
    queryset = Restaurants.objects.all()

#Create your views here.
df = pd.read_csv("https://raw.githubusercontent.com/MichaelMavenWave/Updated/main/New%20Data%203.csv")

def index(request):
#   context = {'data': df}
   return render(request, 'index.html')

# def index(request):
#     return HttpResponse("Hello, world. You're at the restaurants index!")
