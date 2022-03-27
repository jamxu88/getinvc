import React from 'react'
import { v4 as uuidv4 } from 'uuid';

function DisplayMembers(props) {
    var members = props.members.map(function(member,i){
        return <p key={uuidv4()}>{member.username}</p>
    })
    return (
        <div className="pl-4 pt-4 w-full h-full flex-col space-y-2">
            {members}
        </div>
    )
}
export default DisplayMembers