from records.models import Patient, Seizure, Medication, Surgery, SURGERY_CHOICES
from rest_framework import serializers

class SeizureSerializer(serializers.ModelSerializer):
    long_severity = serializers.CharField(source='get_episode_severity_display')
    long_frequency = serializers.CharField(source='get_frequency_display')
    long_confidence = serializers.CharField(source='get_event_confidence_display')
 
    class Meta:
        model = Seizure
        fields = ('assessment_date', 'frequency', 'long_frequency', 'episode_severity', 'long_severity', 'event_confidence', 'long_confidence')

class MedSerializer(serializers.ModelSerializer):
    long_dose = serializers.CharField(source='get_dose_unit_display')
    long_frequency = serializers.CharField(source='get_frequency_display')
 
    class Meta:
        model = Medication
        fields = ('dosage', 'dose_unit', 'long_dose', 'frequency', 'long_frequency', 'name', 'date', 'no_medications')

class SurgerySerializer(serializers.ModelSerializer):
    long_type = serializers.CharField(source='get_surgery_type_display')

    class Meta:
        model = Surgery
        fields = ('date', 'surgery_type', 'long_type')

class PatientSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Patient	
        fields = ('anon_number', 'seizures', 'medications', 'surgeries')
    
    seizures = SeizureSerializer(many=True)
    medications = MedSerializer(many=True)
    surgeries = SurgerySerializer(many=True)
