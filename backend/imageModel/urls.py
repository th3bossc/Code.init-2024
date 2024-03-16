from django.urls import path
from .views import ImageModelView

app_name='imageModel'
urlpatterns = [
    path('colourize/', ImageModelView.as_view()),
]
