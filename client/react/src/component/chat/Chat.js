import React, {Component} from 'react'
import Getin from './Getin'
import Sendbutton from './sendbutton'
import Members from './Members'
import VoiceChannel from './VoiceChannel'
import Brightness from './Brightness'
import LobbyCode from './LobbyCode'
import Textbox from './Textbox'
import TextChannel from './TextChannel'
import Profile from './Profile'
import ExtraButton from './ExtraButtons'
import PreLobby from './prelobby/PreLobby'
import { io } from "socket.io-client";
import Settings from './settings/Settings'
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
    window.location = window.location.origin
})



socket.on("joinLobby", () => {
    // Remove Lobby Overlay
    socket.emit("syncData", true);
})

socket.on("disc", () => {
    window.location = window.location.origin
})



class Chat extends Component{
    state = {
        recentMessage: 0,
        lobbyId: "",
        client: {
            username: "",
            status: "silent"
        },
        vcList: [],
        users: [],
        chat: [], //ment to test fringe cases in the text box
        io:[
            {
                type:"input",
                name:"mic",
                id:"fghjdfkshjl"
            },
            {
                type:"output",
                name:"mic",
                id:"fghjdfkshjl"
            }
        ],
        currentMessage: "",
        preLobby: true,
        owner: "",
        setting: false

    }
    handleDarkMode = e => {
        var element = document.getElementById("darkmode");
    }
    handleBack = e =>{
        window.location = `/`
    }
    syncData = socket.on("recieveData", (data) => {
        console.log("data recieved")
        console.log(data) // Use this data to adjust UI components
        lobbyData = data;
        if(lobbyData.owner) {
            this.state.owner = lobbyData.owner;
        }
        if(lobbyData.users) {
            this.state.users = lobbyData.users;
            lobbyData.users.map(user => {
                if(user.inVoiceChat) {
                    this.state.vcList.push({
                        user: user.username,
                        status: "talking"
                    })
                }
            })
        }
        if(lobbyData.code) {
            this.state.lobbyId = lobbyData.code;
        }
        if(lobbyData.messages){
            console.log(this.state.recentMessage)
            this.state.chat = []
            lobbyData.messages.forEach(message => {
                this.state.chat.push({key: message.messageObject.snowflake, user:message.messageObject.author, message:message.messageObject.text})
                this.setState({ state: this.state });
            })
            
        }
        this.setState({ state: this.state });
        
    })
    handleMessageSubmit = e=> {
        e.preventDefault()
        var message = this.state.currentMessage
        if(message) socket.emit("sendMessage", message);
        this.setState({
            currentMessage: ""
        })
    }
    handleMessageChange =e=>{
        this.setState({
            currentMessage: e.target.value
        })
    }
    handleMessageRecieve(e){
        console.log(e)
         //Should send e with {user,message} format
    }
    handleUsernameSubmit =e=>{
        this.setState({
            client: {
                username: e.target.value,
                status: "silent"
            },
            preLobby:false
        })
        this.getDevices()
        this.getLocalStream()
        socket.emit("setUsername", e.target.value);
        
    }
    handleSettings =e=>{
        this.setState({
            setting: true
        })
    }
    handleBackFromSettings =e=>{
        this.setState({
            setting: false
        })
    }
    getDevices(){
        if (!navigator.mediaDevices || !navigator.mediaDevices.enumerateDevices) {
            console.log("enumerateDevices() not supported.");
            return;
          }
          
          // List cameras and microphones.
          
          navigator.mediaDevices.enumerateDevices()
          .then(function(devices) {
            devices.forEach(function(device) {
              console.log(device.kind + ": " + device.label +
                          " id = " + device.deviceId);
            });
          })
          .catch(function(err) {
            console.log(err.name + ": " + err.message);
          });
    }
    getLocalStream() {
        navigator.mediaDevices.getUserMedia({video: false, audio: true}).then( stream => {
            window.localStream = stream; // A
            window.localAudio.srcObject = stream; // B
            window.localAudio.autoplay = true; // C
        }).catch( err => {
            console.log("u got an error:" + err)
        });
    }
    getComponent(){
        if(this.state.preLobby)return <PreLobby handleUsernameSubmit={this.handleUsernameSubmit}/>
        else if(this.state.setting)return <Settings handleBackFromSettings={this.handleBackFromSettings}/>
        else return <></>
    }
   
    render(){
        
        return(
            <div id="darkmode" className='dark overflow-hidden static'>
                {this.getComponent()}
                <table className='max-h-screen w-screen h-screen bg-white text-black dark:bg-darker dark:text-white table-fixed'>
                    <tr className='h-12 text-2xl'>
                        <th className='w-48'><Getin handleBack={this.handleBack}/></th>
                        <th className='flex pt-2 justify-center space-x-2'><p>{this.state.owner.username}'s Lobby -</p><p className='lobbyCode'>{this.state.lobbyId}</p></th> 
                        <th className='w-48'>{this.state.users.length} Members</th>
                    </tr>
                    <tr id='chatWindow'>
                        <td><VoiceChannel vcList={this.state.vcList}/></td>
                        <td className='pl-4 pt-2 flex h-full flex-col-reverse justify-end dark:bg-dark'><TextChannel chatLog={this.state.chat}/></td>
                        <td><Members users={this.state.users}/></td>
                    </tr>
                    <tr className='h-24'>
                        <td className=''><Profile clientInfo = {this.state.client} handleSettings={this.handleSettings}/></td>
                        <td className='dark:bg-dark p-4 rounded-lg'><Textbox handleMessageSubmit={this.handleMessageSubmit} handleMessageChange={this.handleMessageChange} currentMessage={this.state.currentMessage} /></td>
                        <td><ExtraButton code={this.state.lobbyId}/></td>
                    </tr>
                </table>
            </div>
        )
    }
}

export default Chat