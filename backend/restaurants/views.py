from django.shortcuts import render
from django.http import HttpResponse
import pandas as pd

# Create your views here.
df = pd.read_csv("https://raw.githubusercontent.com/MichaelMavenWave/Updated/main/New%20Data%203.csv")

def index(request):
    context = {'data': df}
    return render(request, 'index.html', context)

#def index(request):
#    return HttpResponse("Hello, world. You're at the restaurants index!")
