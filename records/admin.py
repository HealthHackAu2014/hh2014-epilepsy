from django.contrib import admin
from records.models import Patient, Medication, Seizure, Surgery
# Register your models here.

class MedicationInline(admin.TabularInline):
    model = Medication

class SeizureInline(admin.TabularInline):
    model = Seizure

class SurgeryInline(admin.TabularInline):
    model = Surgery

class PatientAdmin(admin.ModelAdmin):
    model = Patient
    inlines = [MedicationInline, SurgeryInline, SeizureInline]


admin.site.register(Patient, PatientAdmin)
admin.site.register(Medication)
admin.site.register(Surgery)
admin.site.register(Seizure)

