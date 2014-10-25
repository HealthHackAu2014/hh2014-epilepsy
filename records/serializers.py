from records.models import Patient, Seizure, Medication, Surgery
from rest_framework import serializers

class SeizureSerializer(serializers.ModelSerializer):
    class Meta:
        model = Seizure
        fields = ('assessment_date', 'frequency', 'episode_severity', 'event_confidence' )

class MedSerializer(serializers.ModelSerializer):
    class Meta:
        model = Medication
        fields = ('dosage', 'dose_unit', 'frequency', 'name', 'date', 'no_medications')

class SurgerySerializer(serializers.ModelSerializer):
    class Meta:
        model = Surgery
        fields = ('date', 'surgery_type')

class PatientSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Patient	
        fields = ('anon_number', 'seizures', 'medications', 'surgeries')
    
    seizures = SeizureSerializer(many=True)
    medications = MedSerializer(many=True)
    surgeries = SurgerySerializer(many=True)
