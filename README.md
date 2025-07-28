# Gemini with Node.js
## Quick Start
- Get gemini api key here: https://ai.google.dev/gemini-api/docs?hl=ja
- Save api key in `.env`
```sh
cp .env.sample .env
```
- Rewrite by your api key
```sh
GOOGLE_API_KEY=your-api-key-here
```
- Run command
```sh
npm install @google/generative-ai dotenv
node sample.js
```
