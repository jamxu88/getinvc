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

class Chat extends Component{
    state = {
        lobbyId: "",
        client: {
            username: "ifiregamer",
            status: "silent"
        },
        vcList: [
            {
                username: "jamxu",
                status: "talking"
            },
            {
                username: "merk",
                status: "muted"
            },
            {
                username: "ifiregamer",
                status: "silent"
            }
        ],
        users: [
            {
                username: "jamxu",
                otherinfo: {}
            },
            {
                username: "bigbaby",
                otherinfo: {}
            },
            {
                username: "ifiregamer",
                otherinfo: {}
            },
            {
                username: "bigbanana",
                otherinfo: {}
            },
            {
                username: "thez",
                otherinfo: {}
            },
            {
                username: "merk",
                otherinfo: {}
            },
        ],
        chat: [
            {
                user: "jamxu",
                message: "first message"
            },
            {
                user: "jamxu",
                message: "second message"
            }
        ], //ment to test fringe cases in the text box
        currentMessage: ""

    }
    handleDarkMode = e => {
        var element = document.getElementById("darkmode");
    }
    handleMessageSubmit = e=> {
        e.preventDefault()
        var message = this.state.currentMessage
        var author = this.state.client.username
        console.log(author +" "+message) //Change to send message
        this.setState({
            currentMessage: ""
        })
    }
    handleMessageChange =e=>{
        this.setState({
            currentMessage: e.target.value
        })
    }
   
    render(){
        
        return(
            <div id="darkmode" className='dark overflow-hidden static'>
                
                <table className='max-h-screen w-screen h-screen bg-white text-black dark:bg-darker dark:text-white table-fixed'>
                    <tr className='h-12 text-2xl'>
                        <th className='w-48'><Getin /></th>
                        <th className='flex pt-2 justify-center space-x-2'><p>jamxu's Lobby -</p><LobbyCode /></th> {/* This should later be changed to include hover properties*/}
                        <th className='w-48'>{this.state.userCount} Members</th>
                    </tr>
                    <tr id='chatWindow'>
                        <td><VoiceChannel vcList={this.state.vcList}/></td>
                        <td className='pl-4 pt-2 flex h-full flex-col-reverse justify-end dark:bg-dark'><TextChannel chatLog={this.state.chat}/></td>
                        <td><Members users={this.state.users}/></td>
                    </tr>
                    <tr className='h-24'>
                        <td className=''><Profile clientInfo = {this.state.client}/></td>
                        <td className='dark:bg-dark p-4 rounded-lg'><Textbox handleMessageSubmit={this.handleMessageSubmit} handleMessageChange={this.handleMessageChange} currentMessage={this.state.currentMessage} /></td>
                        <td><ExtraButton /></td>
                    </tr>
                </table>
            </div>
        )
    }
}
export default Chat