import "dotenv/config";
import { VapiClient } from "@vapi-ai/server-sdk";

const vapi = new VapiClient({ token: process.env.VAPI_API_KEY! });

async function run() {
  try {
    console.log("Starte Assistant-Erstellung...");
    const assistant = await vapi.assistants.create({
      name: "Support Assistant",
      firstMessage: "Hello! How can I help you today?",
      model: {
        provider: "openai",
        model: "gpt-4o",
        messages: [
          { role: "system", content: "You are a friendly support assistant." }
        ]
      }
    });
    console.log("Erfolg! Assistant ID:", assistant.id);
  } catch (error) {
    console.error("Fehler beim Erstellen:", error);
  }
}

run();