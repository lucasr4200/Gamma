from django.shortcuts import render
from rest_framework.views import APIView
from .models import Case
import json
from .serializer import CaseSerializer
from rest_framework.response import Response
from django.db.models import Q
# Create your views here.

class CasesView(APIView):
    def get(self, request):

        # TODO: search and filter features

        response = {}

        cases = Case.objects.all() 

        num_open_cases = Case.objects.filter(Q(status='Unreviewed') | Q(status='Further Action Needed')).count()

        response['totalPendingCases'] = num_open_cases
        response['totalCases'] = len(cases)
        response['cases'] = CaseSerializer(cases, many=True).data
       
        
        #print(response)

        response = json.dumps(response)

        print(response)
        return Response(response, status=200)
    
    def post(self, request):
        data = json.loads(request.body)
        CaseSerializer.validate(CaseSerializer, data)
        case = CaseSerializer(data=data)
        if case.is_valid():
            case.save()
        else:
            return Response(json.dumps(case.errors), status=400)
        
        return Response(json.dumps(case.data), status=201)
                
    

class CaseView(APIView):
    def get(self, request, case_id):
        case = Case.objects.get(case_id=case_id)
        response = CaseSerializer(case).data
        #print(response)
        return Response(json.dumps(response), status=200)
    
    def delete(self, request, case_id):
        case = Case.objects.get(case_id=case_id)
        case.delete()
        return Response(status=204)