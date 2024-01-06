from django.db import models

# Create your models here.



class Case(models.Model):
    class CaseStatus(models.TextChoices):
        UNREV = "Unreviewed"
        BAD = "Further Action Required"
        GOOD = "Resolved"

    class Platform(models.TextChoices):
        FACEBOOK = "Facebook"
        TWITTER = "Twitter"
        INSTAGRAM = "Instagram"
        REDDIT = "Reddit"
        YOUTUBE = "Youtube"
        DISCORD = "Discord"
        TWITCH = "Twitch"
        OTHER = "Other"

    case_id = models.AutoField(primary_key=True)
    date = models.DateField()
    status = models.CharField(max_length=30, choices = CaseStatus.choices)
    description = models.TextField()
    platform = models.CharField(max_length=20, choices = Platform.choices)
    offender = models.CharField(max_length=100)
    message = models.TextField()
    context = models.JSONField()