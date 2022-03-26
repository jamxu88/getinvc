import React, {Component} from 'react'

class Getin extends Component {
    render(){
        return(
            <button value= "title" className='flex w-full h-full text-4xl justify-center' onClick={this.props.handleSubmitForm}>
                <p className='pl-2 text-black dark:text-white'>
                    get
                </p>
                <p className='text-brey'>
                    in.
                </p>
                <p className='text-mint'>
                    vc
                </p>
                
            </button>
        )
    }
}
export default Getin