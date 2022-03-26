import React, {Component} from 'react'
import Mic from './Mic'
import DC from './DC'
import Setting from './Setting'

class Profile extends Component {
    setStatus(){
        switch (this.props.clientInfo.status){
            case 'talking':
                return <p className='text-gogreen'>●</p>
            case 'muted':
                return <p className='text-morered'>●</p>
            case 'silent':
                return <p className='self-center text-gray-500 text-sm'>○</p>
        }
    }
    render(){
        return(
            <div className='flex w-full h-full place-content-center pt-10 text-md items-center'>
                <div className='text-gogreen pr-2'>{this.setStatus()}</div>
                <p className='w-20 overflow-hidden'>{this.props.clientInfo.username}</p>
                <div className='flex space-x-2'>
                    <button><Mic /></button>
                    <button><DC /></button>
                    <button><Setting /></button>
                </div>
            </div>

        )
    }
}
export default Profile