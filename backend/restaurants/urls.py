from django.urls import path
from django.conf.urls import url
from restaurants import views
from rest_framework.decorators import api_view
from rest_framework.response import Response
from google.cloud import bigquery


@api_view(["GET"])
def redirect_view(request):
    client = bigquery.Client()
    query = """
        SELECT * 
        FROM `composite-shard-319803.bigdata.new in-n-out data` 
        LIMIT 1000
    """
    query_job = client.query(query) 
    data_list = []
    for row in query_job:
        data_list.append(row)
    return Response(data_list)

urlpatterns = [
    path("", views.index,name='index'),
    path("data", redirect_view, name='data')
]
