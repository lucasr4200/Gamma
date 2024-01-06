from django.shortcuts import render
from django.http import HttpResponse
from rest_framework.views import APIView

# Create your views here.

class CasesView(APIView):
    def get(self, request):

        # TODO: 

        return HttpResponse("Hello, world. You're at the cases index.")
    

class CaseView(APIView):
    def get(self, request, case_id):
        return HttpResponse("Hello, world. You're at the case index.")