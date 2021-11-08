import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { useDispatch, useSelector} from 'react-redux'
import {useEffect,useState} from "react"
import {get_contact} from './redux/action/action'
import AddUser from './Components/AddUser'
import ContactCard from './Components/ContactCard';
import EditUser from './Components/EditUser';
function App() {
   
        const [id,setid] = useState(0)
        const [firstName,setfirstName] = useState("")
        const [lastName,setlastName] = useState("")
        const [phoneNumber,setphoneNumber] = useState("")
        const [email,setemail] = useState("")
        const getPerson=(contact)=>{
          setid(contact._id)
          setfirstName(contact.firstName)
          setlastName(contact.lastName)
          setphoneNumber(contact.phoneNumber)
          setemail(contact.email)

         }     
  const contact= useSelector(state => state.contact.users)
  const dispatch=useDispatch()
  useEffect(() => {
    dispatch(get_contact() )
  }, [])

  return (
    <Router>
     {  console.log("j" ,contact)}
      <div className="App">
       <Link to="/listcontact" className="contactButton">CONTACT LIST</Link>
       <Link to="/AddUser" className="AddButton">ADD USER</Link>
          <Route  exact path="/listcontact"  render={()=><div style={{display:"flex", flexDirection:"column"}}>
            {contact.map(el=><ContactCard user={el} getPerson={getPerson} />)}
            </div>} />
           <Route path="/EditUser" render ={()=><EditUser id={id} firstName={firstName} setfirstName={setfirstName} lastName={lastName} setlastName={setlastName} phoneNumber={phoneNumber} setphoneNumber={setphoneNumber} email={email} setemail={setemail}/> }/>
          <Route path="/AddUser"  render ={()=><AddUser id={id} firstName={firstName} setfirstName={setfirstName} lastName={lastName} setlastName={setlastName} phoneNumber={phoneNumber} setphoneNumber={setphoneNumber} email={email} setemail={setemail}/> }/> 
      </div>
    
    </Router>
  );
}

export default App;
