from django.db import models

class Patient(models.Model):
	name = models.CharField(max_length=60)
	anon_number = models.CharField(max_length=10)

SURGERY_CHOICES = (
	(a, 'Anterior temporal lobectomy'),
	(o, 'Other temporal resection'),
	(e, 'Extra temporal resection'),
	(r, 'Repeat resecetion'),
	(v, 'Vagal nerve stimulator'),)


class Surgery(models.Model):
	date = models.DateField()
	sugery_type = models.CharField(max_length=4, choices=SURGERY_CHOICES)
	patient = models.ForeignKey(Patient)


SEIZURE_CHOICES = (
(1, 'Seizure-free, need for antiepileptic drug unknown'),
(2, 'Seizure-free, requires antiepileptic drugs to remain so'),
(3, 'Nondisabling simple partial seizures only'),
(4, 'Nondisabling nocturnal seizures only'),
(5, '1 - 3 per year'),
(6, '4 - 11 per year'),
(7, '1 - 3 per month'),
(8, '1 - 6 per week'),
(9, '1 - 3 per day'),
(10, '4 - 10 per day'),
(11, '> 10 per day but not status epilepticus'),
(12,'Status epilepticus without barbiturate coma'),)

SEVERITY_CHOICES = (
(0, 'Nocternal'),
(1, 'Not Disabling'),
(2, '?1'),
(3, 'Short, brief, disabling'),
(4, '?2'),
(5, 'Convulsion'),
)

EVENT_CONFIDENCE_CHOICES = (
(0, 'Definitely not an epileptic event'),
(1, 'Unsure if epileptic'),
(2, '?1'),
(3, 'Possibly epileptic'),
(4, '?2'),
(5, 'Epileptic seizure'),
)

class Seizure(models.Model):
	assessment_date = models.DateField()
	frequency = models.CharField(max_length=3, choices=SEIZURE_CHOICES) 
	episode_severity = models.CharField(max_length=3, choices=SEVERITY_CHOICES)
	event_confidence = models.CharField(max_length=3, choices=EVENT_CONFIDENCE_CHOICE)
	patient = models.ForeignKey(Patient)	
