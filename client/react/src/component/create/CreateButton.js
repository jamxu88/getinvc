import React, {Component} from 'react'

class CreateButton extends Component {
    render(){
        return(
            <button value= "Create" className='transition w-48 hover:scale-110 hover:shadow-xl flex bg-mint rounded-lg p-4 text-white shadow-md' onClick={this.props.handleSubmitForm}>
                <p className='font-bold pr-2'>
                    Create
                </p>
                a lobby
            </button>
        )
    }
}
export default CreateButton