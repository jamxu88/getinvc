var socket = io("http://localhost:8000");
document.getElementById("createLobby").addEventListener("click", function () {
    let maxUsers = document.getElementById("userCount").value;
    socket.emit("createLobby", maxUsers);
    console.log("Lobby Created");
})