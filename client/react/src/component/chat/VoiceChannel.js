import React, {Component} from 'react'
import VC from './VC'

class Members extends Component {
    state = {
        VC: [
            ["jamxu", "talking"],
            ["merk", "muted"],
            ["ifiregamer", "silent"]
        ]
    }

    render(){
        return(
            <VC VC={this.state.VC}/>
        )
    }
}
export default Members