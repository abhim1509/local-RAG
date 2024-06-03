import { getChatEngine } from "./core/engine.js";
import { timerStart, timerEnd } from "./util.js";
export const chatRequest = async (req, res) => {
  try {
    const { messages } = req.body;
    if (!messages) {
      return res.status(400).json({
        error: "messages are required in the request body",
      });
    }

    let engine = await getChatEngine();
    const userMessage = messages.pop();
    const start = timerStart("chat engine");
    const response = await engine.chat({
      message: userMessage.content,
      // chatHistory: userMessage.content,
      stream: true,
    });
    for await (const message of response) {
      process.stdout.write(message.response);
    }
    timerEnd("chat engine", start);
    return res.status(200).json({
      result: response.response,
    });
  } catch (error) {
    console.error("[LlamaIndex]", error);
    return res.status(500).json({
      error: error.message,
    });
  }
};
