import React, {Component} from 'react'

class JoinButton extends Component{
    render(){
        return(
            <button value={this.props.username} className='font-bold bg-mint rounded-lg p-4 w-36 text-white text-2xl' onClick={this.props.handleUsernameSubmit} >Join</button>
        )
    }
}
export default JoinButton