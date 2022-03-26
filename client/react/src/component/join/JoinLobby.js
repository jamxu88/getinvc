import React, {Component} from 'react'

class JoinLobby extends Component {
    render(){
        return(
            <button className='transition hover:scale-110 hover:shadow-xl flex bg-brey rounded-lg p-4 text-white shadow-md ease-in' onClick={this.props.handleSubmit}>
                <p className='font-bold pr-2'>
                    Join
                </p>
            </button>
        )
    }
}
export default JoinLobby