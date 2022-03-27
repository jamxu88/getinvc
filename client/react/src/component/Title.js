import React, {Component} from 'react'
import Form from './Form'
import Join from './join/Join'
import Create from './create/Create'

class Title extends Component{
    state ={
        titleState: "title"
    }
    handleSubmitForm = e => {
        console.log(e.target.value)
        this.setState({
            titleState: e.target.value
        });
    }
    getComponent(){
        let component;
        let urlParams = new URLSearchParams(window.location.search);
        let code = urlParams.get("code");
        if(code) window.location = window.location.origin + "/app?code=" + code;
        switch (this.state.titleState){
            case 'title' :
                component = <Form handleSubmitForm={this.handleSubmitForm}/>;
                break;
            case 'Join' :
                component = <Join handleSubmitForm={this.handleSubmitForm}/>;
                break;
            case 'Create' :
                component = <Create handleSubmitForm={this.handleSubmitForm}/>;
                break;
            default:
                component = <Form handleSubmitForm={this.handleSubmitForm}/>;
        }
        return component;
    }
    render(){
        return(
            <div className='dark'>
                <div className="relative bg-white flex dark:bg-dark justify-center h-screen w-screen">
                    <div className='fixed flex flex-col top-1/3'>    
                        <div className="top-1/2 text-3xl flex text-8xl place-self-center">
                            <p className='text-black dark:text-white'>
                                get
                            </p>
                            <p className='text-brey'>
                                in.
                            </p>
                            <p className='text-mint'>
                                vc
                            </p>
                        </div>
                        <p className='dark:text-white pt-8 text-4xl place-self-center italic'>Temporary voice and text chat lobbies.</p>
                        <div id="form" className='place-self-center'>
                            {this.getComponent()}
                        </div>
                        
                    </div>
                </div>
            </div>
        )
    }
}
export default Title