from django.db import models

class Customer(models.Model):
    cd_customer = models.AutoField(primary_key=True)
    nm_customer = models.CharField(max_length=90)
    nr_cpf_customer = models.CharField(max_length=11)
    dt_customer = models.DateField()
    ds_email_customer =  models.TextField()

class Visit(models.Model):
    cd_visit = models.AutoField(primary_key=True)
    id_customer = models.ForeignKey(Customer, on_delete=models.CASCADE)
    dt_visit_customer = models.DateField()
