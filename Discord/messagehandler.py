import openaihandler
import requests
import json
from datetime import datetime

# This file contains the message handler for the bot
def handle_message(contents, sender, jump_url, previous_message_content=None):
    response = None;
    if previous_message_content is not None:
        response = openaihandler.get_response(contents, previous_message_content)
    else:
        response = openaihandler.get_response(contents)

    tags, ai_comment = parse_ai_json(response)
    if tags == ["Safe"]:
        return "This message was safe."
    
    if previous_message_content is not None:
        post_to_database(sender, contents, ai_comment, jump_url, tags, previous_message_content)
    else:
        post_to_database(sender, contents, ai_comment, jump_url, tags)
    return response

def parse_ai_json(response):

    """
    Response is a jsonstring
    AI JSON Format:

    {"tags":["tag1", "tag2", "tag3"], "AI Comment":"This is an AI comment."}
    """
    tags = json.loads(response)["tags"]
    ai_comment = json.loads(response)["AI Comment"]
    return tags, ai_comment

    pass

def get_current_date():
    current_date = datetime.now().strftime('%Y-%m-%d')
    return current_date

def post_to_database(user, message, ai_comment, jump_url, tags, context=""):
  
    date = get_current_date()

    url = "localhost:8000/api/cases"

    payload = json.dumps({
    "date": date,
    "status": "Unreviewed",
    "platform": "Discord",
    "offender": user,
    "message": message,
    "context": context,
    "message_url": jump_url,
    "ai_comment": ai_comment,
    "ai_tags": tags
    })
    headers = {
    'Content-Type': 'application/json'
    }

    response = requests.request("POST", url, headers=headers, data=payload)

    print(response.text)

    pass



