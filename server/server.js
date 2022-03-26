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

let lobbyList = [];
let lobbyIds = [];
let lobbyCodes = [];

server.get("/", async (req, reply) => {
    console.log(lobbyCodes)
    const code = req.query.code || null;
    if(code) {
        if(lobbyCodes.includes(code)) {
            reply.redirect("/app?code=" + code);
        }
    }
    let data = await fs.promises.readFile(path.join(__dirname, '../client/index.html'), 'utf8');
    return reply.type('text/html').send(data);
});

server.get("/app", async (req, reply) => {
    let data = await fs.promises.readFile(path.join(__dirname, '../client/app.html'), 'utf8');
    return reply.type('text/html').send(data);
});

server.ready().then(() => {
    console.log("Websocket Active");

    server.io.on("connection", (socket) => {
        let lobby;
        console.log("Client Connected - " + socket.id);
        var address = socket.handshake.address;
        socket.on("createLobby", (maxUsers) => {
            console.log(address + " - Create Lobby");

            let owner = new User();
            owner.setIp(address);

            lobby = new Lobby();
            lobby.setId(nanoid(20));
            lobby.setOwner(owner);
            lobby.setCode(idLetters() + idNumbers());
            lobby.setMaxUsers(maxUsers);
            lobbyList.push(lobby);
            lobbyIds.push(lobby.data.id);
            lobbyCodes.push(lobby.data.metadata.code);
            console.log(lobby);
        })
        socket.on("joinCode", (code) => {
            lobby = lobbyList[lobbyCodes.indexOf(code)];
            console.log(address + " - Join Lobby with code " + code);

            if(lobby.data.metadata.users.length >= lobby.data.metadata.max_users || lobby.data.metadata.locked) {
                socket.emit("invalid", "Lobby is full or locked");
                return;
            }
            if(lobbyCodes.includes(code) && !lobbyList[lobbyCodes.indexOf(code)].data.metadata.locked) {
                socket.emit("preLobby")
                lobby = lobbyList[lobbyCodes.indexOf(code)];
            }
            
        })
        socket.on("leaveLobby", (data) => {
            
        })
        socket.on("setUsername", (data) => {
            console.log(lobby)
            console.log(lobby.getDataServer())
            console.log(lobby.getDataSync())
            if(lobby.data.metadata.users.length >= lobby.data.metadata.max_users || lobby.data.metadata.locked) {
                socket.emit("invalid", "Lobby is full or locked");
                return;
            }
            console.log(address + " - Set Username");
            let user = new User();
            user.setIp(address);
            user.setUsername(data);
            lobby.addUser(user);
            if(address == lobby.data.metadata.owner.data.ip) {
                lobby.setOwner(user)
            }
            socket.emit("joinLobby")
        })

        socket.on("sendMessage", (msg) => {
            let message = new Message();
            let user = lobby.getUserByIp(address);
            message.setAuthor(user.data.username);
            message.setSnowflake(Date.now());
            message.setText(msg);
            lobby.addMessage(message);
            socket.emit("recieveData", lobby.getDataSync())
        })
        socket.on("syncData", () => {
            if(lobby.getUserByIp(address)) socket.emit("recieveData", lobby.getDataSync())
        })

        socket.on('disconnect', () => {
            console.log(address + " - Disconnected");
            if(lobby) {
                let user = lobby.getUserByIp(address);
                lobby.removeUser(user)
            }
        })
  });

});

server.listen(process.env.PORT || 8000);
