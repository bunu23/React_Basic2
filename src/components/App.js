import React,{useState, useEffect} from 'react';
import './App.css';
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";

function App() {
  const LOCAL_STORAGE_KEY="contacts";
const[contacts, setContacts]=useState([]);
const addContactHanler=(contact)=>{
  console.log(contact);
  setContacts([...contacts, contact]);
}

useEffect(
()=>
{
  localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(contacts));
}, [contacts]

);

useEffect(
  ()=>
  {
   const retrieveContacts=JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
   if(retrieveContacts) setContacts(retrieveContacts);
  }, []
  
  );

  return (
  

<div className='ui container'>

<Header/>
<AddContact addContactHanler={addContactHanler}/>
<ContactList contacts={contacts}/>

</div>

  );
}

export default App;
