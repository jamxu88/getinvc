import React, {Component} from 'react'
import Sendbutton from './sendbutton'

class Textbox extends Component {
    render(){
        return(
            <form onSubmit={this.props.handleMessageSubmit} className='flex w-full rounded-xl dark:bg-darkest p-4 space-x-2'>
                <input id="textbox" autoComplete='off' value={this.props.currentMessage} onChange = {this.props.handleMessageChange} type="text" className='w-full bg-transparent focus:ring-0 focus:outline-0' placeholder='Enter your message here...'/>
                <button>
                    <Sendbutton />
                </button>
            </form>
        )
    }
}
export default Textbox