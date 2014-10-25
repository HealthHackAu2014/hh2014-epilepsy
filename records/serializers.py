from records.models import Patient, Seizure
from rest_framework import serializers

class SeizureSerializer(serializers.ModelSerializer):
    class Meta:
        model = Seizure
        fields = ('assessment_date', 'frequency', 'episode_severity', 'event_confidence' )

class PatientSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Patient	
        fields = ('anon_number', 'seizures',)
    
    seizures = SeizureSerializer(many=True)

