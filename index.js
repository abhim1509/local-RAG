import express from "express";
import { chatRequest } from "./chat.controller.js";

const app = express();
const port = parseInt(process.env.PORT || "8000");

app.use(express.json());

app.use(express.text());

app.get("/api/", (req, res) => {
  res.send("LlamaIndex Express Server");
});

app.post("/api/chat", chatRequest);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
