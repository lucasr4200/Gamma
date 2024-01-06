import discord

client = discord.Client(intents=discord.Intents.all())

@client.event
async def on_ready():
    print(f'We have logged in as {client.user}')

@client.event
async def on_message(message):
    if message.author == client.user:
        return

    await message.channel.send(message.content)

client.run('MTE5MzI0OTYwNjAyMTE1NzAwNA.Gs9L0C.unmKtMesAZd_pgm1z5W-ZURxBdixapGND14XNE')