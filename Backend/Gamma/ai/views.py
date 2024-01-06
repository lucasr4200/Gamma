from rest_framework.views import APIView
import json
import requests
from openai import OpenAI
import os
from __init__ import client

# Create your views here.

chat_completion = client.chat.completions.create(
    messages=[
        {
            "role": "user",
            "content": "Say this is a test",
        }
    ],
    model="gpt-3.5-turbo",
)


class ChatView(APIView):
    
