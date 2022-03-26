var socket = io();

let lobbyData;

const urlParams = new URLSearchParams(window.location.search);
const code = urlParams.get("code");
if(code) {
    socket.emit("joinCode", code);
}

socket.on("preLobby", () => {
    // show pre lobby overlay if the code is valid 
})

socket.on("invalid", (message) => {
    alert(message)
})

document.getElementById("setUsername").addEventListener("click", () => {
    socket.emit("setUsername", document.getElementById("username").value);
})

socket.on("joinLobby", () => {
    // Remove Lobby Overlay
    socket.emit("syncData");
})

socket.on("recieveData", (data) => {
    console.log(data) // Use this data to adjust UI components
    lobbyData = data;
})

document.getElementById("sendMessage").addEventListener("click", () => {
    socket.emit("sendMessage", document.getElementById("messageContent").value);
})