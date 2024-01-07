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
            'timestamp': str(message.created_at),
            'source': message.jump_url,
            'platform': 'discord'}

    print(data)

    headers = {'Content-type': 'application/json'}
    response = requests.post('http://127.0.0.1:8000/api/ai', json=data, headers=headers)

#http://127.0.0.1:8000/api/ai used for local host

    x = []
    for i in json.loads(response.json()['message'])['tags']:
        x.append(i)
    print("x:", x)


    x.append(json.loads(response.json()['message'])['AI Comment'])


    z = []
    z.append(x)
    # z.append(y)
    for i in data:
        z.append(data[i])


    print("z:", z)

    await message.channel.send(json.loads(response.json()['message'])['tags'])
    # await message.channel.send(response.json()['message'])


token = os.environ.get('DISCORD_TOKEN')
client.run(token)


