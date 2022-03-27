import React from 'react'
import { v4 as uuidv4 } from 'uuid';

function DisplayChat(props) {
    var chatlog = props.chat.map(function(chatmessage,i){
        return <div className='flex'><p className='font-bold pr-2'>{chatmessage.user}: </p><p>{chatmessage.message}</p></div>
    })
    return (
        <div className="flex pl-4 pt-4 w-full h-full flex-col overflow-auto" key={uuidv4()}>
            {chatlog}
        </div>
    )
}
export default DisplayChat