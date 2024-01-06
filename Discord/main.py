import discord
import os
import requests

client = discord.Client(intents=discord.Intents.all())

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
    response = requests.post('http://localhost:8000/ai/', data=data)



    await message.channel.send(message.content)


token = os.environ.get('DISCORD_TOKEN')
client.run(token)


