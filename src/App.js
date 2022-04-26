import './styles/App.css';
import React, {useState, useEffect} from "react";
import Education from "./components/Education.js"
import Experience from "./components/Experience.js"
import Personal from "./components/Personal.js"

const App = ()=> {
  const [nbEducation, setNbEducation] = useState(1);
  const [nbExperience, setNbExperience] = useState(1);
  const [groupEducation, setgroupEducation] = useState( [1] );
  const [groupExperience, setgroupExperience] = useState( [1] );

  function repeatItemsEd() {
    let tmp = [];
    if (nbEducation<1) setNbEducation(0);

    for (let i=1; i<= nbEducation; i++) {
        if (i ===1 ){
          tmp.push(<h2>Education</h2>) ;
        }  
        tmp.push(<Education key={i} number={i} />);
    };
    tmp.push(           
      <div className="btn-container">
        <button className="btn-add" name="nbEducation" onClick={() => setNbEducation( nbEducation + 1)}>Add Education item</button>
        <button className="btn-del" name="nbEducation" onClick={() => setNbEducation( nbEducation - 1)}>Remove</button>
    </div>
    );
    setgroupEducation( tmp );
  };

  function repeatItemsEx() {
    let tmp = [];
    if (nbExperience<1) setNbExperience(0);
    for (let i=1; i<= nbExperience; i++) {
       if (i===1) {
        tmp.push(<h2>Work experience</h2>) ;
       } 
       tmp.push(<Experience key={i} number={i} />);
    };
    tmp.push(           
      <div className="btn-container">
        <button className="btn-add" name="nbExperience" onClick={() => setNbExperience( nbExperience + 1)}>Add Experience item</button>
        <button className="btn-del" name="nbExperience" onClick={() => setNbExperience( nbExperience - 1)}>Remove</button>
    </div>
    );
    setgroupExperience( tmp );
  };
    
  useEffect(() => {
    repeatItemsEd();
    repeatItemsEx();
  },[nbEducation, nbExperience]);

    return (
      <div className="App">
          <h1>CV builder</h1>  
          <Personal />
          {groupEducation}
          {/* <div className="btn-container">
            <button className="btn-add" name="nbEducation" onClick={() => setNbEducation( nbEducation + 1)}>Add item</button>
            <button className="btn-del" name="nbEducation" onClick={() => setNbEducation( nbEducation - 1)}>Remove item</button>
          </div> */}
          {groupExperience}
          {/* <div className="btn-container">
            <button className="btn-add" name="nbExperience" onClick={() => setNbExperience( nbExperience + 1)}>Add item</button>
            <button className="btn-del" name="nbExperience" onClick={() => setNbExperience( nbExperience - 1)} >Remove item</button>
          </div> */}
      </div>
    );
};

export default App;


// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       "nbEducation": 1,
//       "nbExperience": 1
//     };
//     this.addItem = this.addItem.bind(this);
//     this.deleteItem = this.deleteItem.bind(this);
//   };


//   addItem(event){
//     if (event.target.name === "nbEducation") {
//         this.setState( { [event.target.name]: this.state.nbEducation+1} );
//     } else {
//         this.setState( { [event.target.name]: this.state.nbExperience+1} );
//     }
//   };


//   deleteItem(event){
//     if (event.target.name === "nbEducation") {
//         console.log( this.state );
//         if (this.state.nbEducation > 0 ) {
//           this.setState( { [event.target.name]: this.state.nbEducation-1} );
//         }
//     } else {
//         if ( this.state.nbExperience > 0 ) {
//           this.setState( { [event.target.name]: this.state.nbExperience-1} );
//       }
//     }
//   };


//   render(){
//     const setEducation = [];
//     const setExperience = [];

//     for (let i = 1; i <= this.state.nbEducation; i += 1) {
//       if (i==1) {
//         setEducation.push(<h2>Education</h2>);
//       } 
//       setEducation.push(<Education key={i} number={i} />);
//     };

//     for (let i = 1; i <= this.state.nbExperience; i += 1) {
//       if (i==1) {
//         setExperience.push(<h2>Experience</h2>);
//       } 
//       setExperience.push(<Experience key={i} number={i} />);
//     };

   
//     return (
//       <div className="App">
//           <h1>CV builder</h1>  
//           <Personal />
//           {setEducation}
//           <div class="btn-container">
//             <button className="btn-add" name="nbEducation" onClick={this.addItem} >Add item</button>
//             <button className="btn-del" name="nbEducation" onClick={this.deleteItem} >Remove item</button>
//           </div>
//           {setExperience}
//           <div class="btn-container">
//             <button className="btn-add" name="nbExperience" onClick={this.addItem}>Add item</button>
//             <button className="btn-del" name="nbExperience" onClick={this.deleteItem} >Remove item</button>
//           </div>
//       </div>
//     );
//   };

// };

// export default App;