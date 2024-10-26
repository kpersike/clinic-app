from django.db import models

class Employee(models.Model):
    cd_employee = models.AutoField(primary_key=True)
    nm_employee = models.CharField(max_length=90)
    ds_email_employee = models.TextField()
    ds_pass_employee = models.CharField(null=False)
    nm_position = models.CharField(max_length=90)

    def __str__(self):
        return self.nm_employee
