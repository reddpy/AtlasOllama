# Atlas Client

A local web interface for chatting with Ollama AI models. Built with SolidStart, DaisyUI, and powered by your local Ollama server.

## Features

- Full conversation support with context memory
- Clean, responsive chat interface
- Sound effects toggle

- Configurable Ollama endpoint

## Prerequisites

- [Bun](https://bun.sh/) installed
- [Ollama](https://ollama.ai/) running locally with at least one model downloaded

## Quick Start

1. Clone this repository
2. Install dependencies:
   ```bash
   bun install
   ```
3. Copy the environment file and configure if needed:
   ```bash
   cp .env.example .env
   ```
4. Make sure Ollama is running:
   ```bash
   ollama serve
   ```
5. Start the development server:
   ```bash
   bun dev
   ```
6. Open your browser to `http://localhost:3000`

## Configuration

Edit `.env` to customize your setup:

```env
OLLAMA_ENDPOINT=http://localhost:11434
```

## Usage

1. Make sure you have a model downloaded in Ollama (e.g., `ollama pull llama2`)
2. Start chatting! Your conversation context is maintained during the session
3. Use the sound toggle to enable/disable audio feedback

## Tech Stack

- **Framework**: SolidStart (SolidJS)
- **Language**: TypeScript
- **Styling**: DaisyUI + Tailwind CSS
- **Runtime**: Bun
- **AI Backend**: Ollama

## License

MIT
