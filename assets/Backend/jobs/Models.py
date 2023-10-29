# jobs/models.py
from django.db import models

class Job(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    salary = models.CharField(max_length=100)
    company = models.CharField(max_length=255)
    postedAt = models.DateField()
