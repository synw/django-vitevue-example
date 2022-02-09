from django.contrib import admin
from django.urls import path, include
from django.views.generic import TemplateView

from .api import api

urlpatterns = [
    path("admin/", admin.site.urls),
    # api
    path("api/", api.urls),
    # single page app entry point
    path("spa/", TemplateView.as_view(template_name="index.html")),
    path("vv/", include("vv.urls")),
    # regular django template entrypoint
    path("", TemplateView.as_view(template_name="base.html")),
]
