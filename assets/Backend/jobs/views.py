# jobs/views.py
from rest_framework import viewsets
from .Models import Job
from .serialiser import JobSerializer

class JobViewSet(viewsets.ModelViewSet):
    queryset = Job.objects.all()
    serializer_class = JobSerializer
