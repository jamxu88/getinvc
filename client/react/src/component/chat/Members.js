import React, {Component} from 'react'
import DisplayMembers from './DisplayMembers'
class Members extends Component {

    render(){
        return(
            <DisplayMembers members={this.props.users} />
        )
    }
}
export default Members