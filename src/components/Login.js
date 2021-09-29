import React from 'react'
import { GoogleOutlined} from '@ant-design/icons'
import "firebase/app"

import { auth } from '../firebase';
import firebase from 'firebase/app'

const Login = () => {
  
  alert("Welcome to Daniel Chats! You can have a private converstaion with me and even have a group conversation. Feel free to say hi! :)");
 
  return(

    <div id="login-page">
         <div id = "login-card">
             <h2>Welcome Daniel Chats</h2>
            

                 <div
                   className="login-button google"
                   onClick = {() => auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}
                   >
                       <GoogleOutlined/> Continue with Google

                   </div>

                 <br /> <br />

                 

         </div>
    </div>
  );

}


export default Login