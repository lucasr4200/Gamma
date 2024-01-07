import os

import discord
import messagehandler
import json

intents = discord.Intents.default()
intents.message_content = True
client = discord.Client(intents=intents)


@client.event
async def on_ready():
    print(f'We have logged in as {client.user}')


@client.event
async def on_message(message):
    if message.author == client.user:
        return

    if message.reference is not None: 
        if message.reference.message_id is not None:
            replied_message = await message.channel.fetch_message(message.reference.message_id)
                #If the message was replying to somebody

            if replied_message.author == client.user:
                previous_message_content = replied_message.content
                message_content = message.content
                sender = message.author
                print("Handling ", message_content, " from ", sender)
                messagehandler.handle_message(message_content, sender, message.jump_url, previous_message_content)
                
                return
    else:
        message_content = message.content
        sender = message.author
        print("Handling ", message_content, " from ", sender)
        messagehandler.handle_message(message_content, sender, jump_url=message.jump_url)



# token = os.environ['DISCORD_TOKEN']
client.run("MTE5MzU0MTA0ODIwNzY3OTU5OA.GxrEHM.q6ClJf3YK4ltI3cXJfN9SvoHU1H7QzH2b2E0Ws")
