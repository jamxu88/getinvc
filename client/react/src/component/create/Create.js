import React, {Component} from 'react'
import BackFromCreate from './BackFromCreate'
import CreateLobby from './CreateLobby'
import CreateMember from './CreateMember'
import { io } from "socket.io-client";
const socket = io();

socket.on("ownerJoin", (code) => {
    window.location = `/app?code=${code}`
})

class Create extends Component {
    state = {
        maxUsers: ""
    }
    handleUser = e => {
        this.setState({
            maxUsers: e.target.value
        })
    }
    handleSubmitForm  = e => {
        if(this.state.maxUsers > 10 || this.state.maxUsers <= 1 || this.state.maxUsers === "") {
            alert("Lobbies can have a max of 10 users and a min of 2 users")
        }else {
            socket.emit("createLobby", parseInt(this.state.maxUsers));
        }
    }
    
    render(){
        return(
            <div className='flex pt-8 place-self-center space-x-8 text text-2xl'>
                <BackFromCreate handleSubmitForm={this.props.handleSubmitForm}/>
                <CreateMember handleChange={this.handleUser}/>
                <CreateLobby handleSubmit={this.handleSubmitForm}/>
            </div>
        )
    }
}
export default Create