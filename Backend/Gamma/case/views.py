from django.shortcuts import render
from rest_framework.views import APIView
from .models import Case
import json
from .serializer import CaseSerializer
from rest_framework.response import Response
# Create your views here.

class CasesView(APIView):
    def get(self, request):

        # TODO: search and filter features

        cases = Case.objects.all()        
        response = CaseSerializer(cases, many=True).data
        #print(response)

        return Response(response, status=200)
    
    def post(self, request):
        data = json.loads(request.body)
        CaseSerializer.validate(CaseSerializer, data)
        case = CaseSerializer(data=data)
        if case.is_valid():
            case.save()
        else:
            return Response(case.errors, status=400)
        
        return Response(case.data, status=201)
                

    

class CaseView(APIView):
    def get(self, request, case_id):
        case = Case.objects.get(case_id=case_id)
        response = CaseSerializer(case).data
        #print(response)
        return Response(response, status=200)
    
    def delete(self, request, case_id):
        case = Case.objects.get(case_id=case_id)
        case.delete()
        return Response(status=204)