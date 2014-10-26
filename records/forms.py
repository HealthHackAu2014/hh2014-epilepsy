from django import forms
from django.conf import settings
from django.forms.extras.widgets import SelectDateWidget

from .models import Seizure, Surgery, Medication

'''
Date Widgets
'''
class CalendarWidget(forms.TextInput):
    class Media:
        css = {
            'all': (settings.STATIC_URL + 'css/datepicker.css',)
        }
        js = (settings.STATIC_URL + 'js/bootstrap-datepicker.js',settings.STATIC_URL + 'js/calendar.js')

class CalendarDayWidget(forms.TextInput):
    class Media:
        css = {
            'all': (settings.STATIC_URL + 'css/datepicker.css',)
        }
        js = (settings.STATIC_URL + 'js/bootstrap-datepicker.js',settings.STATIC_URL + 'js/calendar-day.js')

class MedicationAddForm(forms.ModelForm):
    class Meta:
        model = Medication
        widgets = {
            'patient':forms.Select(attrs={'class':'form-control'}),
            'name':forms.TextInput(attrs={'class':'form-control'}),
            'dosage':forms.NumberInput(attrs={'class':'form-control'}),
            'dose_unit':forms.Select(attrs={'class':'form-control'}),
            'frequency':forms.Select(attrs={'class':'form-control'}),
            'date':CalendarWidget(attrs={'class':'input-append form-control'}),
            'no_medications':forms.CheckboxInput(attrs={'class':'form-control'}),
       }  
    
class SeizureAddForm(forms.ModelForm):
    class Meta:
        model = Seizure
        widgets = {
            'patient':forms.Select(attrs={'class':'form-control'}),
            'assessment_date': CalendarWidget(attrs={'class':'input append form-control'}),
            'frequency': forms.Select(attrs={'class':'form-control'}),
            'episode_severity':forms.Select(attrs={'class':'form-control'}),
            'event_confidence':forms.Select(attrs={'class':'form-control'}),
        }

class SurgeryAddForm(forms.ModelForm):
    class Meta:
        model = Surgery
        widgets = {
            'patient':forms.Select(attrs={'class':'form-control'}),
            'date': CalendarWidget(attrs={'class':'input-append form-control'}),
            'surgery_type': forms.Select(attrs={'class':'form-control'}),
        }
