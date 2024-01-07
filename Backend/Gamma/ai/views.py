from rest_framework.views import APIView
import json
from rest_framework.response import Response
from openai import OpenAI
import os
from dotenv import load_dotenv
load_dotenv()
import requests
#from __init__ import client

# Create your views here.
# token = os.environ.get('OPENAI_API_KEY')
# print(token)
client = OpenAI(
    # This is the default and can be omitted
    api_key= "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",
)

class ChatView(APIView):

    def post(self, request):
        data = json.loads(request.body)
        message = data['message']  # String
        user = data['user']  # String
        timestamp = data['timestamp']   # need to convert to datetime object
        source = data['source']     # String
        platform = data['platform']    # String
        try:
            chat_completion = client.chat.completions.create(
                messages=[
                    {
                        "role": "system",
                        "content": "You are an AI that flags content based on tags like \"Harmful Content\" \"Potentially Unsafe\" \"Misleading\" \"Safe\" \"Potentially Misleading\" \"Discriminatory\" \"Promoting Self Harm\" \"Hate Speech\" \"Mean Spirited\".  Return results as {\"tags\":[tags], , \"AI Comment\":ai_comment} . AI comment is an explanation about why the tags were applied to a message"
                    },
                    {
                        "role": "user",
                        "content": user+":"+message
                    }
                ],
                model="gpt-3.5-turbo",
                temperature=0,
                max_tokens=1000,
                top_p=1,
                frequency_penalty=0,
                presence_penalty=0,
            )
            response_messages = chat_completion.choices[0].message.content
            # print(response_messages)

            # Save case object to db


            #finally return response

            return Response({"message":response_messages})

        except Exception as e:
            print(e)
            return Response("OpenAI can't be reached right now. Please try again later.")


