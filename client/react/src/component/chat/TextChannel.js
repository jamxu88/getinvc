import React, {Component} from 'react'
import DisplayChat from './DisplayChat'

class TextChannel extends Component {
    render(){
        return(
            <div className='overflow-auto'>
                <DisplayChat chat={this.props.chatLog} />
            </div>
        )
    }
}
export default TextChannel