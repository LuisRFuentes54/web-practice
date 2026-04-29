import { WebSocketServer } from "ws";

export const socketServer = {};

socketServer.init = (server) => {
    const wss = new WebSocketServer({ server });

    console.log("Socket Server initialized");

    //Manejador de conexiones
    wss.on('connection', (ws) => {
        console.log("New client listening")

        //Manejador de eventos
        ws.on('message', (msg) => {
            const data = JSON.parse(msg);
            console.log("New message received");
            ws.send(JSON.stringify({ msg: "Respuesta desde el servidor" }))
        });

        ws.on("close", () => {
            console.log("Client disconnected");
        })

    });
}