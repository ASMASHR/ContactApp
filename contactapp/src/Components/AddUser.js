import React from 'react'
import { Link } from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {add_contact} from '../redux/action/action'
function AddUser({id,firstName, setfirstName, lastName, setlastName, phoneNumber, setphoneNumber, email, setemail}) {
     const dispatch = useDispatch()
     const addContact=()=>{dispatch(add_contact({firstName,lastName,phoneNumber,email}))}
    return (
        <div className="Edit-Add-Div">
             <div className="ColumnDiv">
                <label >First Name:</label>
                <input type="text" placeholder="First Name" onChange={(e)=>setfirstName(e.target.value)}/>
            </div>
                <div className="ColumnDiv"><label>last Name:</label>
                <input type="text" placeholder="Last Name" onChange={(e)=>setlastName(e.target.value)}/>
            </div>
                <div className="ColumnDiv"><label>phone Number:</label>
                <input type="text" placeholder="Phone Number" onChange={(e)=>setphoneNumber(e.target.value)} />
            </div>
            <div className="ColumnDiv">
                <label>Email:</label>
                <input type="text" placeholder="Email"  onChange={(e)=>setemail(e.target.value)}/>
            </div>
            <div>
           <Link to="/listcontact"> <button onClick={addContact} className="ButtonChange">Add User</button></Link>
            </div>
        </div>
    )
}

export default AddUser
