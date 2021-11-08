import React from 'react'
import {  Link } from "react-router-dom";
import { useDispatch } from 'react-redux'
import {edit_contact} from '../redux/action/action'
function EditUser({id,firstName, setfirstName, lastName, setlastName, phoneNumber, setphoneNumber, email, setemail}) {
    const dispatch = useDispatch()
    const edit_user=()=>{
        dispatch(edit_contact(id,{firstName,lastName,phoneNumber,email}))
    }
    return (
        <div className="Edit-Add-Div">
            <div className="ColumnDiv">
                <label >First Name:</label>
                <input type="text" value={firstName} onChange={(e)=>setfirstName(e.target.value)}/>
            </div>
                <div className="ColumnDiv"><label>last Name:</label>
                <input type="text" value={lastName} onChange={(e)=>setlastName(e.target.value)}/>
            </div>
                <div className="ColumnDiv"><label>phone Number:</label>
                <input type="text" value={phoneNumber} onChange={(e)=>setphoneNumber(e.target.value)} />
            </div>
            <div className="ColumnDiv">
                <label>Email:</label>
                <input type="text" value={email}  onChange={(e)=>setemail(e.target.value)}/>
            </div>
            <div ></div><Link to="/listcontact">   <button onClick={edit_user} className="ButtonChange">Save Changes </button></Link>
        </div>
    )
}
export default EditUser
