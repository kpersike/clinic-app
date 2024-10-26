from django.urls import path
from django import urls
from .views import EmployeeDetail, EmployeeList

urlpatterns = [
    path('employees/', EmployeeList.as_view(), name="Employees"),
    path('employee/<int:pk>', EmployeeDetail.as_view(), name="Employee")
]