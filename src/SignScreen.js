import React,{useRef} from 'react'
import "./SignScreen.css";
import { auth,db } from "./firebase";

export default function SignScreen() {
    const emailRef = useRef(null);
    const passwordRef=useRef(null);
    const signIn=(e)=>{
        e.preventDefault();
        auth.signInWithEmailAndPassword(emailRef.current.value,passwordRef.current.value)
        .then((authUser)=>{
            console.log(authUser)
        })
        .catch((error)=> alert(error.message))
    }
    const register=(e)=>{
        e.preventDefault();
        auth.createUserWithEmailAndPassword(emailRef.current.value,passwordRef.current.value)
        .then((authUser)=>{
            console.log(authUser)
        })
        .catch((error)=> alert(error.message))
    }

    return (
        <div className="signupScreen">
            <form>
                <h1>Sign In</h1>
                <input ref={emailRef} placeholder="Email" type="email"/>
                <input ref={passwordRef} placeholder="password" type="password"/>
                <button type="submit" onClick={signIn}>Sign In</button>
                <h4>
                <span className="signupScreen__gray">New to Netflix? </span>
                 <span className="signupScreen__Link" onClick={register}>Sign Up Now.</span>  </h4>
            </form>
            
        </div>
    )
}
