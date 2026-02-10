import "dotenv/config";
import { VapiClient } from "@vapi-ai/server-sdk";

const vapi = new VapiClient({ token: process.env.VAPI_API_KEY! });

const number = await vapi.phoneNumbers.create({
  name: "Support Line",
  assistantId: assistant.id
});
