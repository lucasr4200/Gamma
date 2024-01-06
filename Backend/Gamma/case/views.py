from django.shortcuts import render
from django.http import HttpResponse
from rest_framework.views import APIView
from .models import Case
import json

# Create your views here.

class CasesView(APIView):
    def get(self, request):

        # TODO: search and filter features

        cases = Case.objects.all()
        # TODO: Add code to serialize cases and return the response
        
        response = json.dumps(cases)
        print(response)

        return response

    

class CaseView(APIView):
    def get(self, request, case_id):
        return HttpResponse("Hello, world. You're at the case index.")