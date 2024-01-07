from django.urls import path
from .views import CasesView, CaseView

urlpatterns = [
    path('api/cases', CasesView.as_view(), name='cases'),
    path('api/cases/<int:case_id>', CaseView.as_view(), name='case'),
]