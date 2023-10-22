# jobs/serializers.py
from rest_framework import serializers
from .Models import Job

class JobSerializer(serializers.ModelSerializer):
    class Meta:
        model = Job
        fields = '__all__'
