import React, {Component} from "react";
import '../styles/Personal.css';

class Personal extends Component {
    constructor(props){
        super(props);
        this.state = {
            "nameP": "Andi",
            "emailP": "aa",
            "phoneP": "123"
        };
        this.handleChange = this.handleChange.bind(this);

    };   

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    };

    render(){
    return (
        <div className="component-personal">
            <h2>Personal Information</h2>  
            <label> Name:           
                <input onChange={this.handleChange} className="personal-name" type="text" value={this.state.nameP} name="nameP" />
            </label>
            <label> Email:           
                <input onChange={this.handleChange} className="personal-email" type="text" value={this.state.emailP} name="emailP" />
            </label>
            <label> Phone:           
                <input onChange={this.handleChange} className="personal-phone" type="text" value={this.state.phoneP} name="phoneP" />
            </label>
        </div>
    );
    }
};

export default Personal;