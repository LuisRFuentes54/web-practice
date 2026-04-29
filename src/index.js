import * as http from "http";
import app from "./app/server.js";
import { socketServer } from "./app/socketServer.js";

const httpServer = http.createServer(app);
socketServer.init(httpServer);

httpServer.listen(app.get("port"), "0.0.0.0", () => {
    console.log(`Server running - Port ${app.get("port")}`)
});
