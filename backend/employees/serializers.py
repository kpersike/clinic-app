from rest_framework import serializers
from .models import Employee

class EmployeeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Employee
        fields = ('cd_employee', 'nm_employee', 'ds_email_employee', 'ds_pass_employee', 'nm_position')