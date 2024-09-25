import { OpenAI } from "openai";
import { config } from "dotenv";
import readline from "readline";

config();

const openai = new OpenAI({
  apiKey: process.env.OPENAPI_SECRET,
});

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.prompt();
rl.on("line", async (input) => {
  const res = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: input }],
  });
  console.log(res.data.choices[0].message.content);
  rl.prompt();
});
