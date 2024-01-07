from openai import OpenAI
import os

# token = os.environ['OPENAI_API_KEY']

client = OpenAI(api_key="")

#Prompt in prompt.txt
prompt = open("prompt.txt", "r").read()

def get_response(message_content, previous_message_content=None):

  messages = [
        {
          "role": "system",
          "content": prompt
        }, {
          "role": "user",
          "content": message_content
        }
      ]

  if previous_message_content is not None:
    messages.insert(1, {
          "role": "assistant",
          "content": previous_message_content
        })

  try:
    response = client.chat.completions.create(
      model="gpt-4",
      messages=messages,
      temperature=0,
      max_tokens=1500,
      top_p=1,
      frequency_penalty=0,
      presence_penalty=0
    )
    return response.choices[0].message.content

  except Exception as e:
    print(e)
    return "I'm sorry, my brain (openai) is unreachable right now."




