from django.db import models

# Create your models here.

#Status and Platform are choices that are checked in the serializer and front end

class Case(models.Model):
    case_id = models.AutoField(primary_key=True)
    date = models.DateField()
    status = models.CharField(max_length=20)
    description = models.TextField(default="No description provided")
    platform = models.CharField(max_length=20)
    offender = models.CharField(max_length=100)
    message = models.TextField()
    context = models.JSONField()