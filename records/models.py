from django.db import models

class Patient(models.Model):
    name = models.CharField(max_length=60)
    anon_number = models.CharField(max_length=10)

    def __unicode__(self):
        return self.anon_number

SURGERY_CHOICES = (
    (0, 'Anterior temporal lobectomy'),
    (1, 'Other temporal resection'),
    (2, 'Extra temporal resection'),
    (3, 'Repeat resecetion'),
    (4, 'Vagal nerve stimulator'),)


class Surgery(models.Model):
    date = models.DateField()
    sugery_type = models.CharField(max_length=1, choices=SURGERY_CHOICES)
    patient = models.ForeignKey(Patient)


SEIZURE_CHOICES = (
('1', 'Seizure-free, need for antiepileptic drug unknown'),
('2', 'Seizure-free, requires antiepileptic drugs to remain so'),
('3', 'Nondisabling simple partial seizures only'),
('4', 'Nondisabling nocturnal seizures only'),
('5', '1 - 3 per year'),
('6', '4 - 11 per year'),
('7', '1 - 3 per month'),
('8', '1 - 6 per week'),
('9', '1 - 3 per day'),
('10', '4 - 10 per day'),
('11', '> 10 per day but not status epilepticus'),
('12','Status epilepticus without barbiturate coma'),)

SEVERITY_CHOICES = (
('0', 'Nocternal'),
('1', 'Not Disabling'),
('2', '?1'),
('3', 'Short, brief, disabling'),
('4', '?2'),
('5', 'Convulsion'),
)

EVENT_CONFIDENCE_CHOICES = (
('0', 'Definitely not an epileptic event'),
('1', 'Unsure if epileptic'),
('2', '?1'),
('3', 'Possibly epileptic'),
('4', '?2'),
('5', 'Epileptic seizure'),
)

class Seizure(models.Model):
    assessment_date = models.DateField()
    frequency = models.CharField(max_length=2, choices=SEIZURE_CHOICES) 
    episode_severity = models.CharField(max_length=1, choices=SEVERITY_CHOICES)
    event_confidence = models.CharField(max_length=1, choices=EVENT_CONFIDENCE_CHOICES)
    patient = models.ForeignKey(Patient, related_name='seizures')

DOSE_UNIT_CHOICES = (
('0', 'ug'),
('1', 'mg'),
('2', 'g'),
('3', 'ml'),
('4', 'drop'),
)

MED_FREQ_CHOICES = (
('qid', 'Four a day'),
('bd', 'Twice a day'),
('tds', 'Three times a day'),
('man', 'Morning'),
('mid', 'Midday'), 
('noc', 'Night'),
('prn', 'As required'),
('dai', 'Daily'),
)

class Medication(models.Model):
    patient = models.ForeignKey(Patient)
    dosage = models.IntegerField()
    dose_unit = models.CharField(max_length=1, choices=DOSE_UNIT_CHOICES)   
    frequency = models.CharField(max_length=4, choices=MED_FREQ_CHOICES)
    name = models.CharField(max_length=20)
    date = models.DateField()
    no_medications = models.BooleanField()
