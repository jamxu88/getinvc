import React, {Component} from 'react'
import { io } from "socket.io-client";
const socket = io();
class Mic extends Component {
    state = {
        muted: false,
    }
    handleClick = (e) => {
        if(this.state.muted) socket.emit("unmute")
        if(!this.state.muted) socket.emit("mute")
    }
    render(){
        return(
            <svg className='fill-black dark:fill-white' width="16" height="16" viewBox="0 0 16 22" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 13.7143C9.89714 13.7143 11.4286 12.1829 11.4286 10.2857V3.42857C11.4286 1.53143 9.89714 0 8 0C6.10286 0 4.57143 1.53143 4.57143 3.42857V10.2857C4.57143 12.1829 6.10286 13.7143 8 13.7143ZM6.85714 3.42857C6.85714 2.8 7.37143 2.28571 8 2.28571C8.62857 2.28571 9.14286 2.8 9.14286 3.42857V10.2857C9.14286 10.9143 8.62857 11.4286 8 11.4286C7.37143 11.4286 6.85714 10.9143 6.85714 10.2857V3.42857ZM13.7143 10.2857C13.7143 13.44 11.1543 16 8 16C4.84571 16 2.28571 13.44 2.28571 10.2857H0C0 14.32 2.98286 17.6343 6.85714 18.1943V21.7143H9.14286V18.1943C13.0171 17.6343 16 14.32 16 10.2857H13.7143Z"/>
            </svg>

        )
    }
}
export default Mic