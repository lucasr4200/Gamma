import discord
import os
import requests
import json

client = discord.Client(intents=discord.Intents.all())

open_ai_key = os.environ.get('OPENAI_API_KEY')

@client.event
async def on_ready():
    print(f'We have logged in as {client.user}')

@client.event
async def on_message(message):
    if message.author == client.user:
        return

    data = {'message': message.content,
            'user': str(message.author),
            'source': message.jump_url,
            'platform': 'discord'}

    print(data)

    headers = {'Content-type': 'application/json'}
    response = requests.post('http://192.168.1.242:8000/api/ai', json=data, headers=headers)

    #http://127.0.0.1:8000/api/ai used for local host

    tagsList = []
    for i in json.loads(response.json()['message'])['tags']:
        tagsList.append(i)
    print("tagsList:", tagsList)


    # tagsList.append(json.loads(response.json()['message'])['AI Comment'])

    aiCommentList = []
    aiCommentList.append(json.loads(response.json()['message'])['AI Comment'])


    dataList = []
    dataList.append(tagsList)
    dataList.append(aiCommentList)

    for i in data:
        dataList.append(data[i])

    print("dataList:", dataList)

    await message.channel.send(json.loads(response.json()['message'])['tags'])

token = os.environ.get('DISCORD_TOKEN')
client.run(token)


