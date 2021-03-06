import React, {Component} from 'react'

class Username extends Component {
    render(){
        return(
            <input type="text" maxlength="24" value={this.props.username} className='bg-brey rounded-lg p-4 text-white text-2xl text-center italic focus:not-italic' placeholder='Username' onChange={this.props.handleOnChange}/>
        )
    }
}
export default Username