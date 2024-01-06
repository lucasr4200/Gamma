from django.db import models

# Create your models here.



class Case(models.Model):
    case_id = models.AutoField(primary_key=True)
    date = models.DateField()
    status = models.Choices("Unreviewed", "Further Action Required", "Resolved")
    description = models.TextField()
    platform = models.Choices("Facebook", "Twitter", "Instagram", "Reddit", "Youtube", "Discord", "Twitch", "Other")
    offender = models.CharField(max_length=100)
    message = models.TextField()
    context = models.JSONField()