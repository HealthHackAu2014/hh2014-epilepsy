from django.conf.urls import patterns, include, url
from django.core.urlresolvers import reverse
from . import views

urlpatterns = patterns('',
    url(r'^patients/$', views.PatientList.as_view(), name='patient_list'),
    url(r'^patients-json/$', views.patient_list_json), 
    #url(r'^patient/add/$', views.PatientAddForm.as_view(), name='patient_add'),
    url(r'^patient/(?P<slug>[-\w]+)/$', views.PatientDetail.as_view(), name='patient_detail'),
    url(r'^patient/(?P<slug>[-\w]+)/add-medication/$', views.MedicationAdd.as_view(), name='med_add'),
    url(r'^patient/(?P<slug>[-\w]+)/add-surgery/$', views.SurgeryAdd.as_view(), name='surgery_add'),
    url(r'^patient/(?P<slug>[-\w]+)/add-seizure/$', views.SeizureAdd.as_view(), name='seizure_add'),
    url(r'^visual/$', views.patient_visual),
)
