import React,{useState} from "react";
import "./App.css"
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";

function App(){

const[contacts,setContacts]=useState([]);
const addContactHandler=(contact)=>{
console.log(contact);


}
return(
  <div className="ui container">
 <Header></Header>
 <AddContact addContactHandler={addContactHandler}></AddContact>
 <ContactList contacts={contacts}></ContactList>
  </div>

)

}
export default App;