from django.urls import path

from . import views

urlpatterns = [
    path("test", views.Test.as_view(), name="test"),
    path("", views.Home.as_view(), name="index"),

]