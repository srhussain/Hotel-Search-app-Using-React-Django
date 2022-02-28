from django.urls import URLPattern
from .views import *
from django.urls import path
from django.conf import settings
from django.conf.urls.static import static 

urlpatterns=[
    path('api/get-hotels/',get_hotel),
    path('api/get-amenities/',get_amenities)
]
urlpatterns+=static(settings.MEDIA_URL,document_root=settings.MEDIA_ROOT)
