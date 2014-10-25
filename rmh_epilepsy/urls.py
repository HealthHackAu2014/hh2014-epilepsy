from django.conf.urls import patterns, include, url
from django.contrib import admin
from rest_framework import routers
from records import views

router=routers.DefaultRouter()
router.register(r'patients', views.PatientViewSet) 


urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'rmh_epilepsy.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),
    #url(r'^records/', include(records.urls)),	
    url(r'^admin/', include(admin.site.urls)),
    url(r'^', include(router.urls)), 
    url(r'^api/', include('rest_framework.urls', namespace='rest_framework'))
)
