import React from 'react'
import './Profile.css';
import Navbar from './Navbar';
import { selectUser } from './UserSlice';
import { auth } from './firebase';
import {useSelector} from 'react-redux'
import PlanScreen from "./PlanScreen";



export default function Profile() {
    const user = useSelector(selectUser)
    return (
        <div className="profileScreen" >
            <Navbar/>


            <div className="profileScreen__body">
                <h1>Edit Profile</h1>
                <div className="profileScreen__info">
                    <img
                    src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                    alt=""
                    />
                    <div className="profileScreen__details">
                        <h2>{user.email}</h2>
                        <div className="profileScreen__plans">
                            <h3>Plans</h3>
                            <PlanScreen/>

                            <button className="profileScreen__signOut" onClick={()=> auth.signOut()}>
                                sign Out 

                            </button>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}
