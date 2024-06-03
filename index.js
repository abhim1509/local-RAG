import { setChatEngine } from "./src/core/engine.js";
import { startServer } from "./src/server.js";

try {
  setChatEngine();
  startServer();
} catch (error) {
  console.log(JSON.stringify(error));
}
