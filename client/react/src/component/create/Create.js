import React, {Component} from 'react'
import BackFromCreate from './BackFromCreate'
import CreateLobby from './CreateLobby'
import CreateMember from './CreateMember'

class Create extends Component {
    state = {
        maxUsers: 10
    }
    handleUser = e => {
        this.setState({
            maxUsers: e.target.value
        })
        console.log(e.target.value)
    }
    handleSubmitForm  = e => {
        console.log("hjfkdsahlfjksldf")
        //create lobby here
    }
    render(){
        return(
            <div className='flex pt-8 place-self-center space-x-8 text text-2xl'>
                <BackFromCreate handleSubmitForm={this.props.handleSubmitForm}/>
                <CreateMember handleChange={this.handleUser}/>
                <CreateLobby handleSubmit={this.handleSubmitForm}/>
            </div>
        )
    }
}
export default Create