import { setEngine } from "./src/initialise.js";
import { startServer } from "./src/server.js";

try {
  setEngine();
  startServer();
} catch (error) {
  console.log(JSON.stringify(error));
}
