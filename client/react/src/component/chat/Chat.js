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

class Chat extends Component{
    state = {
        lobbyId: "",
        userCount: 6,
        chat: [
            {
                user: "jamxu",
                message: "first message"
            },
            {
                user: "jamxu",
                message: "second message"
            },
            {
                user: "jamxu",
                message: "third message"
            },
            {
                user: "jamxu",
                message: "third message"
            },
            {
                user: "jamxu",
                message: "third message"
            },
            {
                user: "jamxu",
                message: "third message"
            },
            {
                user: "jamxu",
                message: "third message"
            },
            {
                user: "jamxu",
                message: "third message"
            },
            {
                user: "jamxu",
                message: "third message"
            },
            {
                user: "jamxu",
                message: "third message"
            },
            {
                user: "jamxu",
                message: "third message"
            },
            {
                user: "jamxu",
                message: "third message"
            },
            {
                user: "jamxu",
                message: "third message"
            },
            {
                user: "jamxu",
                message: "third message"
            },
            {
                user: "jamxu",
                message: "third message"
            },
            {
                user: "jamxu",
                message: "third message"
            },
            {
                user: "jamxu",
                message: "third message"
            },
            {
                user: "jamxu",
                message: "third message"
            },
            {
                user: "jamxu",
                message: "third message"
            },
            {
                user: "jamxu",
                message: "third messagethird messagethird messagethird messagethird messagethird messagethird messagethird messagethird messagethird messagethird messagethird message"
            }
        ] //ment to test fringe cases in the text box

    }
    handleDarkMode = e => {
        var element = document.getElementById("darkmode");
    }
    render(){
        return(
            <div id="darkmode" className='dark overflow-hidden'>
                <table className='w-full h-full bg-white text-black dark:bg-darker dark:text-white table-fixed'>
                    <tr className='h-12 text-2xl'>
                        <th className='w-48'><Getin /></th>
                        <th className='flex pt-2 justify-center space-x-2'><p>jamxu's Lobby -</p><LobbyCode /></th> {/* This should later be changed to include hover properties*/}
                        <th className='w-48'>{this.state.userCount} Members</th>
                    </tr>
                    <tr className='h-full'>
                        <td><VoiceChannel /></td>
                        <td className='pl-4 pt-2 flex h-[82.1vh] flex-col-reverse justify-end dark:bg-dark'><TextChannel chatLog={this.state.chat}/></td>
                        <td><Members /></td>
                    </tr>
                    <tr className='h-24'>
                        <td className=''><Profile /></td>
                        <td className='dark:bg-dark p-8 rounded-lg'><Textbox /></td>
                        <td><ExtraButton /></td>
                    </tr>
                </table>
            </div>
        )
    }
}
export default Chat