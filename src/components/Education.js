import React, { useState, useEffect} from "react";
import '../styles/Education.css';

const Education = () => {
  const [institutionEd, setInstitution] = useState("NYU");
  const [degreeEd, setDegree] = useState("Master");
  const [periodEd, setPeriod] = useState("2015-2018");

  function handleChange(event) {
    if (event.target.name === "institutionEd") {
        setInstitution(event.target.value);
    } else if (event.target.name === "degreeEd") {
        setDegree(event.target.value);
    } else if (event.target.name === "periodEd") {
        setPeriod(event.target.value);
    }  
  };

  return(
    <div className="component-education">
        <label> Institution:           
            <input onChange={handleChange} className="edu-institution" type="text" value={institutionEd} name="institutionEd" />
        </label>
        <label> Degree:           
            <input onChange={handleChange} className="edu-degree" type="text" value={degreeEd} name="degreeEd" />
        </label>
        <label> Period:           
            <input onChange={handleChange} className="edu-period" type="text" value={periodEd} name="periodEd" />
        </label>
    </div>
  );
};

export default Education;