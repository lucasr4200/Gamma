from rest_framework.views import APIView
import json
from rest_framework.response import Response
from openai import OpenAI
import os
#from __init__ import client

# Create your views here.

client = OpenAI(
    # This is the default and can be omitted
    api_key='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',
)

class ChatView(APIView):

    def post(self, request):
        data = json.loads(request.body)
        message = data['message']
        chat_completion = client.chat.completions.create(
            messages=[
                {
                    "role": "user",
                    "content": message,
                }
            ],
            model="gpt-3.5-turbo",
        )
        return Response(chat_completion)
