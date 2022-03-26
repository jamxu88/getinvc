import React, {Component} from 'react';
import JoinButton from './join/JoinButton';
import CreateButton from './create/CreateButton';

class Form extends Component{
    render(){
        return(
            <div className='flex pt-8 place-self-center space-x-20 text text-2xl'>
                <JoinButton handleSubmitForm={this.props.handleSubmitForm} />
                <CreateButton handleSubmitForm={this.props.handleSubmitForm} />
            </div>
        )
    }
}
export default Form