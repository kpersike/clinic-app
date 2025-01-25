from django.http import HttpRequest, HttpResponse
from django.db.models import Q
from .models import Customer, Visit
from .serializers import CustomerSerializer, VisitSerializer
from rest_framework import generics
    
class CustomerVisitDetail(generics.ListCreateAPIView):
    serializer_class = VisitSerializer

    def get_queryset(self):
        customer_id = self.kwargs['id']
        return Visit.objects.filter(id_customer=customer_id)
    
class SearchCustomer(generics.ListCreateAPIView):
    serializer_class = CustomerSerializer

    def get_queryset(self):
        customer_name = self.kwargs['nm_customer']
        return Customer.objects.filter(Q(nm_customer__icontains=customer_name))

class CustomerDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Customer.objects.all()
    serializer_class = CustomerSerializer

class CustomerList(generics.ListCreateAPIView):
    queryset = Customer.objects.all()
    serializer_class = CustomerSerializer

class VisitList(generics.ListCreateAPIView):
    queryset = Visit.objects.all()
    serializer_class = VisitSerializer