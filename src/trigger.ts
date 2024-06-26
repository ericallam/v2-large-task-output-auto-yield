import { TriggerClient } from "@trigger.dev/sdk";

export const client = new TriggerClient({
  id: "v2-large-task-output-auto-yield-uXbg",
  apiKey: process.env.TRIGGER_API_KEY,
  apiUrl: process.env.TRIGGER_API_URL,
});
