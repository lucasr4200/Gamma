from django.db import models

# Create your models here.

#Status and Platform are choices that are checked in the serializer and front end

class Case(models.Model):
    case_id = models.AutoField(primary_key=True)
    date = models.DateTimeField()
    status = models.CharField(max_length=20)
    platform = models.CharField(max_length=20)
    offender = models.CharField(max_length=100)
    message = models.TextField()
    message_url = models.URLField()
    context = models.TextField()
    ai_comment = models.TextField(default="N/A")
    ai_tags = models.JSONField(default=list)