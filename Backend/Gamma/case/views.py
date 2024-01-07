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
    

    
    def options(self, request):# FUCK CORS OH MY GOOD GOD CRIMONEY JESUS
        response = Response()
        response['Access-Control-Allow-Origin'] = 'http://174.3.244.48:3000'
        response["Access-Control-Allow-Methods"] = "GET, POST, PUT, PATCH, DELETE, OPTIONS"
        response['Access-Control-Allow-Headers'] = "Origin, X-Requested-With, Content-Type"
        response.status_code = 200
        return response

    

    def patch(self, request):
        
        # Parse the request data
        data = request.data

        # Get the case id and action from the request data
        case_id = data.get('caseId')
        action = data.get('action')

        # Get the case object with the given id
        case = Case.objects.get(case_id=case_id)
        
        # Update the case status based on the action
        if action == 'escalate':
            case.status = 'Further Action Needed'
        elif action == 'resolve':
            case.status = 'Resolved'
        elif action =="unreview":
            case.status = 'Unreviewed'
        else:
            return Response({"error": "Invalid action"}, status=400)

        # Save the changes to the database
        case.save()

        # Create a response with the success message
        response = Response("Case status updated successfully",status=200 )

        # Add CORS headers to allow requests from any host
        response["Access-Control-Allow-Origin"] = "http://174.3.244.48:3000"
        response["Access-Control-Allow-Methods"] = "GET, POST, PUT, PATCH, DELETE, OPTIONS"
        response["Access-Control-Allow-Headers"] = "Origin, X-Requested-With, Content-Type"

        return response
                
    

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