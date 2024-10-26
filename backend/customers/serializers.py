from rest_framework import serializers
from .models import Customer, Visit

class CustomerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Customer
        fields = ('cd_customer', 'nm_customer', 'nr_cpf_customer', 'dt_customer', 'ds_email_customer')

class VisitSerializer(serializers.ModelSerializer):
    class Meta:
        model = Visit
        fields = ('cd_visit', 'id_customer', 'dt_visit_customer')
