from django.shortcuts import render
from django.http import HttpResponse
from rest_framework.response import Response
import pandas as pd

# Create your views here.
df = pd.read_csv("https://raw.githubusercontent.com/MichaelMavenWave/Updated/main/New%20Data%203.csv")

def index(request):
    context = {'data': df}
    return Response(context)

#def index(request):
#    return HttpResponse("Hello, world. You're at the restaurants index!")
