import React, {useState,useEffect} from 'react'
import './Navbar.css'
import { useHistory,Link } from "react-router-dom";

export default function Navbar() {
    const [show,handleShow]= useState()
    const history = useHistory();


   

    useEffect(() => {
        window.addEventListener("scroll",()=>{
            if (window.scrollY > 100 ){
                handleShow(true);
            }else handleShow(false)
        });

        return ()=>{
            window.removeEventListener("scroll",()=>{});
        };
          
    }, [])
    
    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img 
            onClick={()=>history.push('/')}
            className="nav__logo"
            src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
            alt=""
            />
            <Link to ='/Profile'>
            <img
            onClick={()=> history.push("/Profile")}
            className="nav__avatar"
            src= "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt=""
            />
            </Link>
        </div>
    )
}
