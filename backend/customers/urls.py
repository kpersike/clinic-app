from django.urls import path
from django import urls
from .views import CustomerDetail, CustomerList, CustomerVisitDetail, VisitList, SearchCustomer

urlpatterns = [
    path('customers/', CustomerList.as_view(),  name='Customers'),
    path('customer/<int:id>', CustomerDetail.as_view(), name='Customer'),
    path('visits/', VisitList.as_view(),  name='Visits'),
    path('visits/<int:id>', CustomerVisitDetail.as_view(),  name='Visit'),
    path('search/<str:nm_customer>', SearchCustomer.as_view(), name="Search")
]