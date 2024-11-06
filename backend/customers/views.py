from django.http import HttpRequest, HttpResponse
from .models import Customer, Visit
from .serializers import CustomerSerializer, VisitSerializer
from rest_framework import generics

# customer by id - get, update, delete

class CustomerDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Customer.objects.all()
    serializer_class = CustomerSerializer

# get customers

class CustomerList(generics.ListCreateAPIView):
    queryset = Customer.objects.all()
    serializer_class = CustomerSerializer

class VisitDetail(generics.ListCreateAPIView):
    serializer_class = VisitSerializer
    def get_queryset(self):
        customer_id = self.kwargs['pk']
        return Visit.objects.filter(id_customer=customer_id) # alerta

class VisitList(generics.ListCreateAPIView):
    queryset = Visit.objects.all()
    serializer_class = VisitSerializer

def helloWorld(HttpRequest):
    return HttpResponse("Hello world")