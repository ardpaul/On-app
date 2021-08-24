import { Button } from '@material-ui/core';
import React from 'react';
import './Login.css';
import {auth,provider} from './firebase';
import { actionTypes } from './reducer';
import { useStateValue } from './StateProvider';

function Login() {
    const [{},dispatch] = useStateValue();
    const signIn = () => {
        auth
            .signInWithPopup(provider)
            .then((result) => {
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user,
                })
            })
            .catch((error) => alert(error.message));
    }
    return (
        <div className="login">
           <div className="login_container">
               <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvFFmFILUUROTob0X5Wyqsk1HpqCD0zxSPZ67RVe0Iw7AJoqRNuW-TTwMLODhMD4Qqan0&usqp=CAU" alt=""/> 
                <div className="login_text">
                    <h1>Sign in to ON APP</h1>
                   
                </div>
                <div className="login_text2">
                <h3>ENJOY</h3>
                </div>
                <Button type="submit" onClick={signIn}>Sign in With Google</Button>
           </div>
        </div>
    );
}

export default Login
