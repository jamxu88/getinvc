import React, {Component} from 'react'
import IO from '../prelobby/IO'

class Settings extends Component{
    render(){
        return(
            <div>
                <div className='absolute flex justify-center h-screen w-screen backdrop-blur-sm bg-black/30'>
                    
                    <div className='flex flex-col place-content-center space-y-4'>
                        <p className='text-white text-5xl place-self-center p-8'>Settings</p>
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
                        <button className='place-self-center' onClick={this.props.handleBackFromSettings}>
                            <svg width="46" height="45" viewBox="0 0 46 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20.9308 26.2396L22.4583 27.7083L27.875 22.5L22.4583 17.2917L20.9308 18.7604L23.7258 21.4583H13.25V23.5417H23.7258L20.9308 26.2396ZM30.5833 13.125H15.4167C14.2142 13.125 13.25 14.0625 13.25 15.2083V19.375H15.4167V15.2083H30.5833V29.7917H15.4167V25.625H13.25V29.7917C13.25 30.9375 14.2142 31.875 15.4167 31.875H30.5833C31.775 31.875 32.75 30.9375 32.75 29.7917V15.2083C32.75 14.0625 31.775 13.125 30.5833 13.125Z" fill="white"/>
                            </svg>
                        </button>
                    </div>
                    
                </div>
            </div>
        )
    }
}
export default Settings