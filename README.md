# Gamma

**Winner, AI/ML Category – HACKED 2024**

Gamma is a Discord‐focused content moderation tool powered by GPT-4. It automatically flags hate speech, misinformation, and other harmful content, and surfaces cases in a React dashboard where moderators can review, escalate, or resolve them.

---

## 🚀 Features

- **Real-time Discord Moderation**  
  Listens to messages, sends potential violations to GPT-4 for classification.

- **AI-Powered Flagging**  
  Identifies hate speech, misinformation, discriminatory language, etc., and generates an AI comment + tags.

- **Moderator Dashboard**  
  - **Case List**: Filter by status (Unreviewed, Further Action Needed, Resolved)  
  - **Detail View**: See offender username, flagged content, AI comment & tags  
  - **Actions**: Resolve case or mark “Unreviewed” for re-assessment

- **Case Workflow**  
  - **Unreviewed** → **Further Action Needed** → **Resolved**

---

## 📂 Repository Structure
```bash
Gamma/
├─ Backend/            # API & data store for cases
├─ Discord/            # Discord bot that captures & flags messages
├─ gamma-frontend/     # React app for moderator dashboard
└─ LICENSE, README.md
```


---

> **Note:** This was run on a private server and is no longer publicly hosted. You will have to host it yourself if you want to run it.  <br>
> 
> **Note:** A valid [OpenAI API Key]([url](https://openai.com/index/openai-api/)) and [Discord bot token]([url](https://discord.com/developers/docs/intro)) are needed for this to funciton as well.

1. **Clone & enter repo**  
   ```bash
   git clone https://github.com/lucasr4200/Gamma.git
   cd Gamma
   ```

2.	Create a .env (in each of Backend/, Discord/, gamma-frontend/ as needed)
   ```bash
    DISCORD_TOKEN=your_discord_bot_token
    OPENAI_API_KEY=your_openai_api_key
   ```

3.	Install dependencies
   ```bash
    cd Backend
    pip install -r requirements.txt
    
    cd ../Discord
    pip install discord.py openai python-dotenv
    
    cd ../gamma-frontend
    npm install
  ```

> **Note:** Again, this was run on a private server and is no longer publicly hosted.


   
