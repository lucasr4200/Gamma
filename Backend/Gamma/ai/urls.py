from django.urls import path
from .views import ChatView

urlpatterns = [
    path('api/ai', ChatView.as_view(), name='ai'),
]
