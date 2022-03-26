import React, {Component} from 'react'

class BackFromCreate extends Component {
    render(){
        return(
            <button value= "title" className='transition hover:scale-110 hover:shadow-xl flex bg-brey rounded-lg p-4 text-white shadow-md ease-in' onClick={this.props.handleSubmitForm}>
                <p className='font-bold pr-2'>
                    ◁
                </p>
            </button>
        )
    }
}
export default BackFromCreate