import React from 'react'
import { v4 as uuidv4 } from 'uuid';

function VC(props) {
    var users = props.VC.map(function(member,i){
        switch (member.status){
            case 'talking':
                return <div className='flex space-x-2'><p className='text-gogreen'>●</p><p>{member.username}</p></div>
            case 'muted':
                return <div className='flex space-x-2'><p className='text-morered'>●</p><p>{member.username}</p></div>
            case 'silent':
                return <div className='flex space-x-2'><p className='self-center text-gray-500 text-sm'>○</p><p>{member.username}</p></div>
            default:
                return null
        }
    })
    return (
        <div className="text-xl text pl-4 pt-4 w-full h-full flex-col space-y-4" key={uuidv4()}>
            {users}
        </div>
    )
}
export default VC