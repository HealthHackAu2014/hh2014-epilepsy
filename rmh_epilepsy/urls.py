from django.conf.urls import patterns, include, url
from django.contrib import admin
from django.conf import settings
from rest_framework import routers
from records import views

router=routers.DefaultRouter()
router.register(r'patients', views.PatientViewSet) 

urlpatterns = patterns('',
    
    url(r'^admin/', include(admin.site.urls)),
    url(r'^api/', include('rest_framework.urls', namespace='rest_framework')),
    url(r'^records/', include('records.urls')),
    url(r'^', include(router.urls)),
 	)
