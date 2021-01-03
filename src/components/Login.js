import React from 'react'
import { Button } from '@material-ui/core'
import { auth, provider } from '../firebase'
import './Login.css'


const Login = () => {
    const signIn = () => {
        auth.signInWithPopup(provider).catch((error) => alert(error.message))
    }
    return(
        <div className='login'>
            <div className='login__telegram'>
                <img src='https://st3.depositphotos.com/4141023/14403/v/600/depositphotos_144034639-stock-illustration-paper-airplane-icons-vector.jpg' />
                <h1>Telegram</h1>
            </div>
            <Button onClick={signIn}>Sign In</Button>
        </div>
    )
}

export default Login
