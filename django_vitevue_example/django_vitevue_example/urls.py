from django.contrib import admin
from django.urls import path
from django.views.generic import TemplateView

urlpatterns = [
    path("admin/", admin.site.urls),
    # single page app entry point
    path("spa/", TemplateView.as_view(template_name="index.html")),
    # regular django template entrypoint
    path("", TemplateView.as_view(template_name="base.html")),
]
