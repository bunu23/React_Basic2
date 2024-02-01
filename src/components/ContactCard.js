import React from "react";
import user from "../images/user.png"
const ContactCard=(props)=>{
const{id,name,email}=props.contact;
    return(
        <div className="item">
            <img className="ui image " src={user} alt="user" width="19px" height="20px"/>
            <div className="content">
                <div className="header">{name}</div>
                <div>{email}</div>
            </div>
            <i className="trash alternate icon trash"
            style={{color:"red", marginTop:"7px"}}></i>
        </div>
    )
    }




export default ContactCard;