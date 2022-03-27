import React, {Component} from 'react'

class CreateMember extends Component {
    render(){
        return(
            <div className='hover:scale-110 flex bg-mint rounded-lg p-4 text-white shadow-md' onClick={this.props.handleSubmit}>
                <p className='font-bold pr-2'>
                    Member #:
                </p>
                <input type="number" min="2" max="10" className='pl-4 bg-mint rounded-lg p-4 text-white focus:bg-mint focus:ring-0 focus:outline-0 shadow-md italics p-0 w-16' onChange={this.props.handleChange}/>
            </div>
        )
    }
}
export default CreateMember