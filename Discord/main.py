import discord
import os
import requests


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
            'channel': str(message.channel)}

    headers = {'Content-type': 'application/json'}
    response = requests.post('http://127.0.0.1:8000/api/ai', json=data, headers=headers)

    await message.channel.send(message.content)


token = os.environ.get('DISCORD_TOKEN')
client.run(token)


