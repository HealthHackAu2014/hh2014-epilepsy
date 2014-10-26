from django.http import HttpResponse
from django.shortcuts import render
from django.views import generic
from django.views.decorators.csrf import csrf_exempt

from .models import Patient, Seizure, Medication, Surgery
from .serializers import PatientSerializer, SeizureSerializer 
from .forms import MedicationAddForm, SeizureAddForm, SurgeryAddForm

from rest_framework import viewsets
from rest_framework.parsers import JSONParser
from rest_framework.renderers import JSONRenderer

import datetime

class JSONResponse(HttpResponse):
    def __init__(self, data, **kwargs):
        content = JSONRenderer().render(data)
        kwargs['content_type'] = 'application/json'
        super(JSONResponse, self).__init__(content, **kwargs)

@csrf_exempt
def patient_list_json(request):
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

class PatientForm(generic.FormView):
    model = Patient

class MedicationAdd(generic.CreateView):
    fields = ['patient', 'dosage','dose_unit','frequency','name','date','no_medication']
    form_class = MedicationAddForm
    model = Medication
    
    def get_initial(self):
        slug = self.kwargs['slug']
        patient = Patient.objects.get(slug=slug)
        return {'patient': patient.id }

class SeizureAdd(generic.CreateView):
    fields = ['patient', 'assessment_date','frequency','episode_severity','event_confidence']
    form_class = SeizureAddForm
    model = Seizure
    
    def get_initial(self):
        slug = self.kwargs['slug']
        patient = Patient.objects.get(slug=slug)
        date = datetime.datetime.today().strftime("%Y-%m-%d")
        print date, patient
        return {'patient': patient.id, 'assessment_date':date, }

class SurgeryAdd(generic.CreateView):
    fields = ['patient', 'date','surgery_type']
    form_class = SurgeryAddForm
    model = Surgery

    def get_initial(self):
        slug = self.kwargs['slug']
        patient = Patient.objects.get(slug=slug)
        return {'patient': patient.id }
