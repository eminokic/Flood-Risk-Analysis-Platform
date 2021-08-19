from django.urls import path
from django.conf.urls import url
from restaurants import views
from rest_framework.decorators import api_view
from rest_framework.response import Response
from google.cloud import bigquery

# Retrieves Data from GCP into Backend
@api_view(["GET"])
def redirect_view(request):
    client = bigquery.Client()
    query = """
        SELECT * 
        FROM `composite-shard-319803.bigdata.main data`
        ORDER BY ID
        LIMIT 1000
    """
    query_job = client.query(query) 
    data_list = []
    for row in query_job:
        data_list.append(row)
    return Response(data_list)

# Retrieves Normalized Data from GCP into Backend
@api_view(["GET"])
def redirect_view2(request):
    client = bigquery.Client()
    query = """
        SELECT * 
        FROM `composite-shard-319803.bigdata.Updated Normalized Data 2`
        ORDER BY ID
        LIMIT 1000
    """
    query_job = client.query(query) 
    data_list = []
    for row in query_job:
        data_list.append(row)
    return Response(data_list)

# Creates URL links for the Retrieved Data
urlpatterns = [
    path("", views.index,name='index'),
    path("data", redirect_view, name='data'),
    path("data2", redirect_view2, name='data2'),
]
