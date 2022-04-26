import React, { useState, useEffect} from "react";
import '../styles/Personal.css';

const Personal = () => {
  const [nameP, setName] = useState("Lia Nolan");
  const [emailP, setEmail] = useState("lianolan88@gmail.com");
  const [phoneP, setPhone] = useState("+23 555 89456");

  function handleChange(event){
    if (event.target.name === "nameP") {
       setName(event.target.value);
    } else if (event.target.name === "emailP") {
        setEmail(event.target.value);
    } else if (event.target.name === "phoneP") {
        setPhone(event.target.value);
    }    
  };  

  return (
    <div className="component-personal">
        <h2>Personal Information</h2>  
        <label> Name:           
            <input onChange={handleChange} className="personal-name" type="text" value={nameP} name="nameP" />
        </label>
        <label> Email:           
            <input onChange={handleChange} className="personal-email" type="text" value={emailP} name="emailP" />
        </label>
        <label> Phone:           
            <input onChange={handleChange} className="personal-phone" type="text" value={phoneP} name="phoneP" />
        </label>
    </div>
  );
};

export default Personal;