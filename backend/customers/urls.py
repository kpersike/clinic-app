from django.urls import path
from django import urls
from .views import CustomerDetail, CustomerList, VisitDetail, VisitList, SearchCustomer, helloWorld

urlpatterns = [
    path('customers/', CustomerList.as_view(),  name='Customers'),
    path('customer/<int:pk>', CustomerDetail.as_view(), name='Customer'),
    path('visits/', VisitList.as_view(),  name='Visits'),
    path('visits/<int:pk>', VisitDetail.as_view(),  name='Visit'),
    path('search/<str:nm_customer>', SearchCustomer.as_view(), name="Search"),
    path('hello/', helloWorld, name='hello')
]