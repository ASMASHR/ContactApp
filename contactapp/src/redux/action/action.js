import { GET_CONTACT } from "./action-types";
import axios from "axios";

// get all users
export const get_contact =()=>dispatch=>{
    axios.get('/api/AllUsers')
    .then(res=>dispatch({type:GET_CONTACT,payload:res.data}))
    .catch(err=>console.log(err))
}
// add user
export const add_contact =(newUser)=>dispatch=>{
    axios.post('/api/AddUser',newUser)
    .then(res=>dispatch(get_contact()))
    .catch(err=>console.log(err))
}
// edit user
export const edit_contact =(id,newuser)=>dispatch=>{
    axios.put(`/api/EditUser/${id}`,newuser)
    .then(res=>dispatch(get_contact()))
    .catch(err=>console.log(err))
}

// delete user
export const delete_contact =(id)=>dispatch=>{
   axios.delete(`/api/DeleteUser/${id}`)
 
    .then(res=>dispatch(get_contact()))
    .catch(err=>console.log(err))
}