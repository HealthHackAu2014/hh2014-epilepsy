from records.models import Patient
from rest_framework import serializers

class PatientSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Patient	
        fields = ('anon_number', 'seizures',)
    
    seizures = serializers.RelatedField(
        many=True,
        required=False,
    )


class SeizureSerializer(serializers.Serializer):
    patient = PatientSerializer(required=False, many=True)
    date = serializers.DateField()
 
