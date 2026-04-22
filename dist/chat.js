import express from 'express';
import { Server } from "socket.io";
import path from 'path';
import { fileURLToPath } from 'url';
import randomNamw from '@scaleway/random-name';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PORT = process.env.PORT || 3500;
const app = express();
app.use(express.static(path.join(__dirname, "public")));
const expressServer = app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});
const io = new Server(expressServer, {
// cors: {
//     origin: process.env.NODE_ENV === "production" ? false : ["http://localhost:5500", "http://127.0.0.1:5500"]
// }
});
let clients = new Map();
io.on('connection', socket => {
    if (!clients.has(socket.id)) {
        clients.set(socket.id, randomNamw());
        io.emit("id", clients.get(socket.id));
    }
    console.log(`User ${clients.get(socket.id)} connected`);
    socket.on('disconnect', function (data) {
        console.log("User", clients.get(socket.id), "disconnected");
        clients.delete(socket.id);
    });
    socket.on('message', data => {
        console.log(clients.get(socket.id), data);
        io.emit('message', `${new Date().toLocaleTimeString()} ${clients.get(socket.id)}: ${data}`);
    });
});
//# sourceMappingURL=chat.js.map