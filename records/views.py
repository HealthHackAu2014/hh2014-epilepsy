from django.shortcuts import render
from records.models import Patient, Seizure
from rest_framework import viewsets
from records.serializers import PatientSerializer, SeizureSerializer 

class PatientViewSet(viewsets.ModelViewSet):
    queryset = Patient.objects.all()
    serializer_class = PatientSerializer
