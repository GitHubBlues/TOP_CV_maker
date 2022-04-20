import React, {Component} from "react";

class Experience extends Component {
    constructor(props) {
        super(props);
        this.state = {
            "companyEx": "Sony",
            "titleEx": "CEO",
            "periodEx": "period"
        };
        this.handleChange = this.handleChange.bind(this);
    }; 

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    };
    
    render(){
        return (
            <div className="component-experience">
                <label> Company:           
                    <input className="exp-company" onChange={this.handleChange} type="text"  value={this.state.companyEx} name="companyEx" />
                </label>
                <label> Email:           
                    <input className="exp-title" onChange={this.handleChange} type="text" value={this.state.titleEx} name="titleEx" />
                </label>
                <label> Period:           
                    <input className="exp-period" onChange={this.handleChange} type="text" value={this.state.periodEx} name="periodEx" />
                </label>
            </div>
        );
    };

};

export default Experience;