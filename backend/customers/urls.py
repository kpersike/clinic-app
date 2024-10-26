from django.urls import path
from django import urls
from .views import CustomerDetail, CustomerList, VisitList, helloWorld

urlpatterns = [
    path('customers/', CustomerList.as_view(),  name='Customers'),
    path('visits/<int:pk>', VisitList.as_view(),  name='Visits'),
    path('customer/<int:pk>', CustomerDetail.as_view(), name='Customer'),
    path('hello/', helloWorld, name='hello')
]