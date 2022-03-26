import fastify from "fastify";
import fastifyIO from "fastify-socket.io";
import { nanoid } from 'nanoid';
import fs from 'fs';
import path from 'path';
import { customAlphabet } from 'nanoid';
import fastifyStatic from "fastify-static";
import { dirname } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));

const idLetters = customAlphabet('abcdefghijklmnopqrstuvwxyz', 3)
const idNumbers = customAlphabet('0123456789', 3)

import Lobby from "./classes/lobby.js";
import User from "./classes/user.js";
import Message from "./classes/message.js";

const server = fastify();

server.register(fastifyIO);
server.register(fastifyStatic, {
    root: path.join(__dirname, '../client')
});


server.get("/", async (req, reply) => {
    return reply.sendFile(path.join(__dirname, '../client/index.html'));
});

let lobbyList = [];
let lobbyIds = [];

server.ready().then(() => {
    console.log("Websocket Active");

    server.io.on("connection", (socket) => {
        console.log("Client Connected - " + socket.id);
        var address = socket.handshake.address;
        socket.on("createLobby", (maxUsers) => {
            console.log(address + " - Create Lobby");

            let owner = new User();
            owner.setIp(address);

            let lobby = new Lobby();
            lobby.setId(nanoid(20));
            lobby.setOwner(owner);
            lobby.setCode(idLetters() + idNumbers());
            lobby.setMaxUsers(maxUsers);
            lobbyList.push(lobby);
            lobbyList.push(lobby.data.id);
        })
        socket.on("joinLobby", (data) => {
        
        })
        socket.on("leaveLobby", (data) => {
            
        })
        socket.on("setUsername", (data) => {
        
        })
        socket.on("sendMessage", (data) => {
            
        })
        socket.on("recieveMessage", (data) => {
            
        })
        socket.on("syncData", (data) => {
            
        })

  });

});

server.listen(8000 || process.env.PORT);