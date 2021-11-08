import React from 'react'
import {  Link } from "react-router-dom";
import './style.css'
import {useDispatch} from 'react-redux'
import {delete_contact} from '../redux/action/action'
function ContactCard({user,getPerson}) {
    const  dispatch = useDispatch()
    const DeleteUser=()=>{
        dispatch(delete_contact(user._id))

    }
    return (
        <div className="contactCardDiv">
            <div className="infoDiv"><h4>Name:</h4><p>{user.firstName} {user.lastName}</p></div>
            <div className="infoDiv"><h4>Email:</h4><p>{user.email}</p></div>
            <div className="infoDiv"><h4>Phone Number: </h4><p>{user.phoneNumber}</p></div>
            <div>
                 <button className="CardButton" onClick={DeleteUser}> Delete</button> 
                <Link to="/EditUser">   <button className="CardButton"  onClick={()=>getPerson(user)}>Edit</button> </Link>
              </div>
           
        </div>
    )
}

export default ContactCard
