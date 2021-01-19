import React, {useState,useEffect} from 'react'
import './Navbar.css'

export default function Navbar() {
    const [show,handleShow]= useState()


   

    useEffect(() => {
        window.addEventListener("scroll",()=>{
            if (window.scrollY > 100 ){
                handleShow(true);
            }else handleShow(false)
        });

        return ()=>{
            window.removeEventListener("scroll");
        };
          
    }, [])
    
    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img 
            className="nav__logo"
            src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
            alt=""
            />
            <img
            className="nav__avatar"
            src= "https://i.pinimg.com/736x/e7/e8/44/e7e844b813c8b2310e6bc103887b61a3.jpg"
            alt=""
            />
        </div>
    )
}
