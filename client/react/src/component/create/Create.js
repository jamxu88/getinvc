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
        maxUsers: 2
    }
    handleUser = e => {
        this.setState({
            maxUsers: e.target.value
        })
        console.log(e.target.value)
    }
    handleSubmitForm  = e => {
        socket.emit("createLobby", parseInt(this.state.maxUsers));
        
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