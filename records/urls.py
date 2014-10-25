from django.conf.urls import patterns, include, url
from . import views

urlpatterns = patterns('',
    url(r'^patients/$', views.patient_list),
    url(r'^patient-list/$', views.PatientList.as_view(), name='patient_list'),
    url(r'^patient/(?P<slug>[-\w]+)/$', views.PatientDetail.as_view(), name='patient_detail'),
)
