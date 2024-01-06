from django.urls import path
from views import ChatView

urlpatterns = [
    path('api/ai', ChatView, name='ai'),
]
