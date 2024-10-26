from django.http import HttpRequest, HttpResponse
from .models import Employee
from .serializers import EmployeeSerializer
from rest_framework import generics

class EmployeeDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Employee.objects.all()
    serializer_class = EmployeeSerializer

class EmployeeList(generics.ListCreateAPIView):
    queryset = Employee.objects.all()
    serializer_class = EmployeeSerializer
