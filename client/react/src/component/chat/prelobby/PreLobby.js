import React, {Component} from 'react'
import Username from './Username'
import JoinButton from './JoinButton'
import BackButton from './BackButton'
import IO from './IO'

class PreLobby extends Component {
    state = {
        username:""
    }
    handleOnChange = e=>{
        this.setState({
            username: e.target.value
        })
    }
    handleBack = e=>{
        window.location = `/`
    }
    render(){
        return(
            <div>
                <div className='absolute flex justify-center h-screen w-screen backdrop-blur-sm bg-black/30'>
                    <div className='flex flex-col place-content-center space-y-4'>
                        <p className='text-white text-3xl place-self-center'>
                            Your Lobby
                        </p>
                        <div className='space-x-4'>
                            <Username handleUsernameSubmit={this.props.handleUsernameSubmit} username={this.state.username} handleOnChange={this.handleOnChange}/>
                            <JoinButton handleUsernameSubmit={this.props.handleUsernameSubmit} username={this.state.username}/>
                            <BackButton handleBack={this.handleBack}/>
                        </div>
                        <IO />
                    </div>
                </div>
            </div>
        )
    }
}
export default PreLobby