import React, {Component} from 'react'

class BackFromJoin extends Component {
    render(){
        return(
            <button value= "title" className='transition hover:scale-110 hover:shadow-xl flex bg-mint rounded-lg p-4 text-white shadow-md ease-in' onClick={this.props.handleBack}>
                <p className='font-bold pr-2'>
                    ▷
                </p>
            </button>
        )
    }
}
export default BackFromJoin