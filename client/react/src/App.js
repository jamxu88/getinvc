import './App.css';
import Title from './component/Title'
import Chat from './component/chat/Chat'
import { io } from "socket.io-client";
const socket = io();

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



socket.on("joinLobby", () => {
    // Remove Lobby Overlay
    socket.emit("syncData", true);
})

socket.on("disc", () => {
    window.location = "https://getin.vc/"
})

socket.on("recieveData", (data) => {
    console.log("data recieved")
    console.log(data) // Use this data to adjust UI components
    lobbyData = data;
    if(lobbyData.messages){
        lobbyData.messages.forEach(message => {
            Chat.handleMessageRecieve({user:message.messageObject.author, message:message.messageObject.text})
        })
    }
    
})

function App() {


  return getComponent()
}

function getComponent() {
  if(window.location.pathname == "/app") {
    return (
      <Chat />
    );
  }else {
    return (
      <Title />
    );
  }
}

export default App;
