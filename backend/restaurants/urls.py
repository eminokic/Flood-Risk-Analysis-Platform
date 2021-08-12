from django.urls import path
from django.conf.urls import url
from restaurants import views

urlpatterns = [
    url(r'^$',views.index,name='index'),
]

#urlpatterns = [
#    path('', views.index, name='index'),
#]