from django.http import HttpResponse
from django.shortcuts import render
from django.views import generic
from django.views.decorators.csrf import csrf_exempt

from records.models import Patient, Seizure
from records.serializers import PatientSerializer, SeizureSerializer 

from rest_framework import viewsets
from rest_framework.parsers import JSONParser
from rest_framework.renderers import JSONRenderer

class JSONResponse(HttpResponse):
    def __init__(self, data, **kwargs):
        content = JSONRenderer().render(data)
        kwargs['content_type'] = 'application/json'
        super(JSONResponse, self).__init__(content, **kwargs)

@csrf_exempt
def patient_list(request):
    if request.method =='GET':
        patients = Patient.objects.all()
        serializer = PatientSerializer(patients, many=True)
        return JSONResponse(serializer.data)
    
class PatientViewSet(viewsets.ModelViewSet):
    queryset = Patient.objects.all()
    serializer_class = PatientSerializer

class PatientDetail(generic.DetailView):
    model = Patient

class PatientList(generic.ListView):
    model = Patient
