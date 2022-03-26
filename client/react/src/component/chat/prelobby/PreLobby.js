import React, {Component} from 'react'
import Username from './Username'
import JoinButton from './JoinButton'
import BackButton from './BackButton'
import IO from './IO'

class PreLobby extends Component {
    render(){
        return(
            <div>
                <div className='absolute flex justify-center h-screen w-screen backdrop-blur-sm bg-black/30'>
                    <div className='flex flex-col place-content-center space-y-4'>
                        <p className='text-white text-3xl place-self-center'>
                            Your Lobby
                        </p>
                        <button className='place-self-center'>
                            <svg className='' width="45" height="44" viewBox="0 0 45 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M28.75 26.08C27.9583 26.08 27.25 26.38 26.7083 26.85L19.2812 22.7C19.3333 22.47 19.375 22.24 19.375 22C19.375 21.76 19.3333 21.53 19.2812 21.3L26.625 17.19C27.1875 17.69 27.9271 18 28.75 18C30.4792 18 31.875 16.66 31.875 15C31.875 13.34 30.4792 12 28.75 12C27.0208 12 25.625 13.34 25.625 15C25.625 15.24 25.6667 15.47 25.7188 15.7L18.375 19.81C17.8125 19.31 17.0729 19 16.25 19C14.5208 19 13.125 20.34 13.125 22C13.125 23.66 14.5208 25 16.25 25C17.0729 25 17.8125 24.69 18.375 24.19L25.7917 28.35C25.7396 28.56 25.7083 28.78 25.7083 29C25.7083 30.61 27.0729 31.92 28.75 31.92C30.4271 31.92 31.7917 30.61 31.7917 29C31.7917 27.39 30.4271 26.08 28.75 26.08ZM28.75 14C29.3229 14 29.7917 14.45 29.7917 15C29.7917 15.55 29.3229 16 28.75 16C28.1771 16 27.7083 15.55 27.7083 15C27.7083 14.45 28.1771 14 28.75 14ZM16.25 23C15.6771 23 15.2083 22.55 15.2083 22C15.2083 21.45 15.6771 21 16.25 21C16.8229 21 17.2917 21.45 17.2917 22C17.2917 22.55 16.8229 23 16.25 23ZM28.75 30.02C28.1771 30.02 27.7083 29.57 27.7083 29.02C27.7083 28.47 28.1771 28.02 28.75 28.02C29.3229 28.02 29.7917 28.47 29.7917 29.02C29.7917 29.57 29.3229 30.02 28.75 30.02Z" fill="white"/>
                            </svg>
                        </button>
                        <div className='space-x-4'>
                            <Username />
                            <JoinButton />
                            <BackButton />
                        </div>
                        <div className='flex space-x-4 place-self-center dark:text-white text-xl items-center'>
                            <input type="checkbox" id='mute'/>
                            <p>Toggle Mute</p>
                            <input type="checkbox" id='push'/>
                            <p>Mute/Push to Talk Key</p>
                        </div>
                        <p className='place-self-center pt-4 dark:text-white text-xl'>Mute/Push to Talk Key</p>
                        <button className='place-self-center flex border-white border-2 rounded-full w-16 dark:text-white justify-center focus:bg-black'>
                            <p>K</p>
                        </button>
                        <IO />
                    </div>
                </div>
            </div>
        )
    }
}
export default PreLobby