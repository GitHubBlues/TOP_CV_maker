import React, {Component} from "react";
import '../styles/Education.css';

class Education extends Component {
    constructor(props){
        super(props);
        this.state = {
            "institutionEd": "NYU",
            "degreeEd": "Master",
            "periodEd": "2019-2022"
        };
        this.handleChange = this.handleChange.bind(this);
    };

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    };
    
    render(){
        return(
            <div className="component-education">
                <label> Institution:           
                    <input onChange={this.handleChange} className="edu-institution" type="text" value={this.state.institutionEd} name="institutionEd" />
                </label>
                <label> Degree:           
                    <input onChange={this.handleChange} className="edu-degree" type="text" value={this.state.degreeEd} name="degreeEd" />
                </label>
                <label> Period:           
                    <input onChange={this.handleChange} className="edu-period" type="text" value={this.state.periodEd} name="periodEd" />
                </label>
            </div>
        );
    };

};

export default Education;
