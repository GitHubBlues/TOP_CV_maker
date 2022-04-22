import './styles/App.css';
import React, {Component} from "react";
import Education from "./components/Education.js"
import Experience from "./components/Experience.js"
import Personal from "./components/Personal.js"


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      "nbEducation": 1,
      "nbExperience": 1
    };
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  };


  addItem(event){
    if (event.target.name === "nbEducation") {
        this.setState( { [event.target.name]: this.state.nbEducation+1} );
    } else {
        this.setState( { [event.target.name]: this.state.nbExperience+1} );
    }
  };


  deleteItem(event){
    if (event.target.name === "nbEducation") {
        console.log( this.state );
        if (this.state.nbEducation > 0 ) {
          this.setState( { [event.target.name]: this.state.nbEducation-1} );
        }
    } else {
        if ( this.state.nbExperience > 0 ) {
          this.setState( { [event.target.name]: this.state.nbExperience-1} );
      }
    }
  };


  render(){
    const setEducation = [];
    const setExperience = [];

    for (let i = 1; i <= this.state.nbEducation; i += 1) {
      if (i==1) {
        setEducation.push(<h2>Education</h2>);
        setEducation.push(<Education key={i} number={i} />);
      } else {
        setEducation.push(<Education key={i} number={i} />);
      }
    };

    for (let i = 1; i <= this.state.nbExperience; i += 1) {
      if (i==1) {
        setExperience.push(<h2>Experience</h2>);
        setExperience.push(<Experience key={i} number={i} />);
      } else {
        setExperience.push(<Experience key={i} number={i} />);
      }
    };

   
    return (
      <div className="App">
          <h1>CV builder</h1>  
          <Personal />
          {setEducation}
          <div class="btn-container">
            <button class="btn-add" name="nbEducation" onClick={this.addItem} >Add item</button>
            <button class="btn-del" name="nbEducation" onClick={this.deleteItem} >Remove item</button>
          </div>
          {setExperience}
          <div class="btn-container">
            <button class="btn-add" name="nbExperience" onClick={this.addItem}>Add item</button>
            <button class="btn-del" name="nbExperience" onClick={this.deleteItem} >Remove item</button>
          </div>
      </div>
    );
  };

};

export default App;
