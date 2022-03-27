import React from 'react'
import { v4 as uuidv4 } from 'uuid';

function DisplayChat(props) {
    var chatlog = props.chat.map(function(chatmessage,i){
        return <div className='flex whitespace-normal' key={uuidv4()}><p className='font-bold whitespace-normal pr-2'>{chatmessage.user}: </p><p className='whitespace-normal w-auto overflow-x-hidden'>{chatmessage.message}</p></div>
    })
    return (
        <div className="flex pl-4 pt-4 w-full whitespace-normal flex-col flex-col-reverse" id="textWindow" key={uuidv4()}>
            {chatlog}
        </div>
    )
}
export default DisplayChat