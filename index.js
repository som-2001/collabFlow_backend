const express = require("express");
const http = require("http");
const { ExpressPeerServer } = require("peer");
const cors=require("cors");

const app = express();
const server = http.createServer(app);
app.use(cors({
    origin:"https://collab-flow-frontend.vercel.app"
}))


const peerServer = ExpressPeerServer(server, {
    debug: true,
    path: "/"
});

app.use("/peerjs", peerServer);

app.get("/", (req, res) => {
    res.send("PeerJS Server is running...");
});

server.listen(9000, () => {
    console.log("PeerJS server running on port 9000");
});
