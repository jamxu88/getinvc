import React, {Component} from 'react'
import Mic from './Mic'
import DC from './DC'
import Setting from './Setting'

class Profile extends Component {
    render(){
        return(
            <div className='flex w-full h-full place-content-center pt-10 text-md items-center'>
                <p className='w-24 overflow-hidden'>Ifireg</p>
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