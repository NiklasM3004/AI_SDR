"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
var server_sdk_1 = require("@vapi-ai/server-sdk");
var vapi = new server_sdk_1.VapiClient({ token: process.env.VAPI_API_KEY });
var assistant = await vapi.assistants.create({
    name: "Support Assistant",
    firstMessage: "Hello! How can I help you today?",
    model: {
        provider: "openai",
        model: "gpt-4o",
        messages: [
            { role: "system", content: "You are a friendly phone support assistant. Keep responses under 30 words." }
        ]
    }
});
