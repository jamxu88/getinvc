import React, {Component} from 'react'

class JoinButton extends Component {
    render(){
        return(
            <button value= "Join" className='transition w-48 justify-center hover:scale-110 hover:shadow-xl flex bg-brey rounded-lg p-4 text-white shadow-md ease-in' onClick={this.props.handleSubmitForm}>
                <p className='font-bold pr-2'>
                    Join
                </p>
                a lobby
            </button>
        )
    }
}
export default JoinButton