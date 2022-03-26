import React from 'react'

function DisplayMembers(props) {
    var members = props.members.map(function(member,i){
        return <p>{member[0]}</p>
    })
    return (
        <div className="pl-4 pt-4 w-full h-full flex-col space-y-2">
            {members}
        </div>
    )
}
export default DisplayMembers