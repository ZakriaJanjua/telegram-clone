import { Avatar } from '@material-ui/core'
import React from 'react'
import {IconButton} from '@material-ui/core'
import MoreHoriz from '@material-ui/icons/MoreHoriz'
import './Thread.css'
const Thread = () => {
    const [input, setInput] = React.useState('')
    const sendMessage = (event) => {
        event.preventDefault()

        //firebase

        setInput('')
    }
    
    return(
        <div className='thread'>
            <div className='thread__header'>
                <div className='thread__header__contents'>
                    <Avatar/>
                    <div className='thread__header__contents__info'>
                        <h4>ThreadName</h4>
                        <h5>Last seen</h5>
                    </div>
                </div>
                <IconButton>
                <MoreHoriz className='thread__header__details'/>
            </IconButton>
            </div>
            <div className='thread__messages'></div>
            <div className='thread__input'>
                <input placeholder='Type your message'></input>
                <button onClick={sendMessage} value={input} onChange={(e)=>e.target.value}>Send Message</button>
            </div>
        </div>
    )
}

export default Thread