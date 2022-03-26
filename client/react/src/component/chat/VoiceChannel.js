import React, {Component} from 'react'
import VC from './VC'

class Members extends Component {

    render(){
        return(
            <VC VC={this.props.vcList}/>
        )
    }
}
export default Members