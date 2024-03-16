from django.contrib import admin
from django.urls import path, include
from .views import ImageModelView

app_name='imageModel'
urlpatterns = [
    path('', ImageModelView.as_view())
]
