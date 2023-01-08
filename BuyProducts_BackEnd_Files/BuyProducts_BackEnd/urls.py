"""BuyProducts_BackEnd URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include, re_path
from django.conf import settings
from django.conf.urls.static import static, serve
from rest_framework.routers import DefaultRouter
import BPBE_App.views

router = DefaultRouter()
router.register(r'products', BPBE_App.views.AllProducts_Viewset)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('BPBE_App.urls')),
    path('api/', include(router.urls)),
    # re_path(r'^(?P<path>.*)$', serve,
    #         {'document_root': settings.FRONTEND_ROOT}),
]