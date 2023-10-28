from django.db import models

class JobPosting(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    # Add more fields as needed
