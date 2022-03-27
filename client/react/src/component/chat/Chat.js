import Peer from "simple-peer";
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

    constructor(props) {
        super(props);
        this.socketRef = React.createRef();
        this.userVideo = React.createRef();
        this.peersRef = React.createRef([]);
    }

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
        setting: false,
        peers: [],
        userUpdate: [],
        muted: false,
    }
    handleDarkMode = e => {
        var element = document.getElementById("darkmode");
    }
    handleBack = e =>{
        window.location = `/`
    }

    createStream() {
		navigator.mediaDevices
		.getUserMedia({ audio: true })
		.then((stream) => {
			this.userVideo.current.srcObject = stream;
			this.socketRef.current.emit("join room", "roomcode");
			this.socketRef.current.on("all users", (users) => {
			console.log(users)
			const peers = [];
			users.forEach((userID) => {
				const peer = this.createPeer(userID, this.socketRef.current.id, stream);
					this.peersRef.current.push({
						peerID: userID,
						peer,
					});
					peers.push({
						peerID: userID,
						peer,
					});
				});
				this.setPeers(peers);
			});
			this.socketRef.current.on("user joined", (payload) => {
				console.log("==",payload)
				const peer = this.addPeer(payload.signal, payload.callerID, stream);
				this.peersRef.current.push({
					peerID: payload.callerID,
					peer,
				});
				const peerObj = {
					peer,
					peerID: payload.callerID,
				};
				this.setPeers((users) => [...users, peerObj]);
			});

			this.socketRef.current.on("user left", (id) => {
			const peerObj = this.peersRef.current.find((p) => p.peerID === id);
			if (peerObj) {
				peerObj.peer.destroy();
			}
			const peers = this.peersRef.current.filter((p) => p.peerID !== id);
                this.peersRef.current = peers;
				this.setPeers(peers);
			});

			this.socketRef.current.on("receiving returned signal", (payload) => {
				const item = this.peersRef.current.find((p) => p.peerID === payload.id);
				item.peer.signal(payload.signal);
			});

			this.socketRef.current.on("change", (payload) => {
				this.state.userUpdate(payload);
			});
		});
	}

    createPeer(userToSignal, callerID, stream) {
		const peer = new Peer({
			initiator: true,
			trickle: false,
			stream,
		});
	
		peer.on("signal", (signal) => {
			this.socketRef.current.emit("sending signal", {
				userToSignal,
				callerID,
				signal,
			});
		});
	
		return peer;
	}

    addPeer(incomingSignal, callerID, stream) {
		const peer = new Peer({
			initiator: false,
			trickle: false,
			stream,
		});
	
		peer.on("signal", (signal) => {
			this.socketRef.current.emit("returning signal", { signal, callerID });
		});
	
		peer.signal(incomingSignal);
	
		return peer;
	}


    eventListener = window.addEventListener('resize', function(event){

        //document.getElementById('chatWindow').style.height = window.innerHeight-36
        //console.log(document.getElementById('chatWindow').style.height)
    })

    syncData = socket.on("recieveData", (data) => {
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
            this.state.chat = []
            lobbyData.messages.forEach(message => {
                // add message to start of chat array
                this.state.chat.unshift({key: message.messageObject.snowflake, user:message.messageObject.author, message:message.messageObject.text})
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
        this.scrollToBottom("textWindow")

    }

    scrollToBottom = (id) => {
        const element = document.getElementById(id);
        element.scrollTop = element.scrollHeight;
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
    handleMute =e=> {
        if(this.state.muted) socket.emit("userUnmute")
        if(!this.state.muted) socket.emit("userMute")
        this.setState({
            muted: !this.state.muted
        })
        console.log(this.state.muted)
    }

    handleJoin =e=> {
        console.log('oaigdsoighaosdgh')
        this.setState({})
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
            //console.log("u got an error:" + err)
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
                        <th className='w-48'>Members - {this.state.users.length}</th>
                    </tr>
                    <tr id='chatWindow' className=''>
                        <td><VoiceChannel vcList={this.state.vcList}/></td>
                        <td className='pl-4 pt-2 flex flex-col-reverse h-full justify-end whitespace-normal dark:bg-dark'><TextChannel chatLog={this.state.chat}/></td>
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