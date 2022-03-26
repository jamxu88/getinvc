import React, {Component} from 'react'
import BackFromJoin from './BackFromJoin'
import JoinLobby from './JoinLobby'

class Join extends Component {
    state = {
        lobbyId: ""
    }
    handleChange = e=> {
        this.setState({
            lobbyId: e.target.value
        })
        e.target.value = this.state.lobbyId
    }
    handleSubmit = e=> {
        e.preventDefault()
        console.log("hjksdahflk")
    }
    render(){
        return(
            <form className='flex pt-8 place-self-center space-x-8 text text-2xl' onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.lobbyId} placeholder='Enter Lobby Code' className='bg-brey rounded-lg p-4 text-white shadow-md italics' onChange={this.handleChange}>
                </input>
                <JoinLobby />
                <BackFromJoin handleBack={this.props.handleSubmitForm}/>
            </form>
        )
    }
}
export default Join