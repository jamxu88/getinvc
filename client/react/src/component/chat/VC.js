import React from 'react'

function VC(props) {
    var users = props.VC.map(function(member,i){
        switch (member[1]){
            case 'talking':
                return <div className='flex space-x-2'><p className='text-gogreen'>●</p><p>{member[0]}</p></div>
            case 'muted':
                return <div className='flex space-x-2'><p className='text-morered'>●</p><p>{member[0]}</p></div>
            case 'silent':
                return <div className='flex space-x-2'><p className='self-center text-gray-500 text-sm'>○</p><p>{member[0]}</p></div>
        }
        
    })
    return (
        <div className="text-xl text pl-4 pt-4 w-full h-full flex-col space-y-4">
            {users}
        </div>
    )
}
export default VC