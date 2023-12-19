from django.urls import path
from . import views


urlpatterns = [
    path("",views.home, name = "home"),
    path('ajax_handler/', views.ajax_handler, name='ajax_handler'),
    path('stop/', views.stop, name='stop'),
    path('down/', views.down, name='down')

]