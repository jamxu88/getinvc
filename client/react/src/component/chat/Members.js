import React, {Component} from 'react'
import DisplayMembers from './DisplayMembers'
class Members extends Component {
    state = {
        members: [
            ["jamxu", "otherinfo"],
            ["bigbaby", "otherinfo"],
            ["ifiregamer", "otherinfo"],
            ["bigbanana", "otherinfo"],
            ["thez", "otherinfo"],
            ["merk", "otherinfo"],
        ]
    }

    render(){
        return(
            <DisplayMembers members={this.state.members} />
        )
    }
}
export default Members