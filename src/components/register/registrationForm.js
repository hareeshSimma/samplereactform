
import React, { Component } from 'react';
// import * as FontAwesome from 'react-icons/lib/fa';
import validate from "validate.js";
import { Link } from 'react-router-dom';
import * as FontAwesome from 'react-icons/lib/fa';
import '../../css/registration.scss';

class RegisterationForm extends Component {
  constructor(){
    super();
    this.state = {
      firstName: "",
      lastName: "",
      pin: "",
      email: "",
      username: "",
      password: "",
      confirmpassword: "",
      errors: {
        firstName: "",
        lastName: "",
        pin: "",
        email: "",
        username: "",
        password: "",
        confirmpassword: ""
      }
    };

    this.constraints = {
      firstName: {
        format: {
          pattern: "[A-Za-z]+"
        },
        presence: {
          allowEmpty: false
        }
      },
      lastName: {
        format: {
          pattern: "[A-Za-z]+"
        },
        presence: {
          allowEmpty: false
        }
      },
      pin: {
        format: {
          pattern: "[0-9]+"
        },
        length: {is: 6}
      },
      email: {
        email: true
      },
      username: {
        length: { minimum: 8 },
      },
      password: {
        length: { minimum: 6 }
      },
      confirmpassword: {
        equality: "password"
      }
    };
  }
  
  inputChanged = (e) => {
    const name = e.target.name;
    this.setState(
      {
        [e.target.name]: e.target.value
      },
      () => { this.validateCheck(name) }
    );
    
  };

  validateCheck = (name) => {
    const validJsErrors = validate(this.state, this.constraints);
    const errorKeys = validJsErrors ? Object.keys(validJsErrors): {};
    if(validJsErrors){
      Object.entries(validJsErrors)
        .forEach((key, value) => {
        let errors = {...this.state.errors};      
      if(!errorKeys.includes(name)){
        errors[name] = "";
        this.setState({
          errors: errors
        });
      }else if(key[0] === name && key[1].length > 0){
        errors[name] = key[1][0];
        this.setState({
          errors: errors
        });
      }
    });
    }
  }

  submitForm = (e) => {
    e.preventDefault();
    alert("Form submit");
  }

  render() {
    const formErrors = validate(this.state,this.constraints);
    return (
      <React.Fragment>
        <section>
          <div className="heading">
            <h1>Register</h1>
            <p>Join the community and improve your game <br />with <b>ANGLR</b></p>
          </div>
          <form>
            <div className={"form-fields" + " " +(formErrors && this.state.errors.firstName ? "errors":"")}>
              <span className="icon"><FontAwesome.FaUser /></span>
              <input type="text" name="firstName" placeholder="First Name" value={this.state.firstName} onChange={this.inputChanged} autoComplete="firstName"/>
              <span className={"error-icon"}>
                {formErrors && this.state.errors.firstName?<FontAwesome.FaExclamationTriangle/>:""}
              </span>
            </div>
            <div className={"form-fields"+ " " +(formErrors && this.state.errors.lastName ? "errors":"")}>
              <span className="icon"><FontAwesome.FaUser /></span>
              <input type="text" name="lastName" placeholder="Last Name" value={this.state.lastName} onChange={this.inputChanged} autoComplete="lastName"/>
              <span className={"error-icon"}>
                {formErrors && this.state.errors.lastName?<FontAwesome.FaExclamationTriangle/>:""}
              </span>
            </div>
            <div className={"form-fields"+ " " +(formErrors && this.state.errors.pin ? "errors":"")}>
              <span className="icon"><FontAwesome.FaMapMarker /></span>
              <input type="tel" name="pin" placeholder="Zip Code" value={this.state.pin} onChange={this.inputChanged} autoComplete="pin"/>
              <span className={"error-icon"}>
                {formErrors && this.state.errors.pin?<FontAwesome.FaExclamationTriangle/>:""}
              </span>           
            </div>
            <div className={"form-fields"+ " " +(formErrors && this.state.errors.email ? "errors":"")}>
              <span className="icon"><FontAwesome.FaEnvelope /></span>
              <input type="email" name="email" placeholder="Email" value={this.state.email} onChange={this.inputChanged} autoComplete="email"/>
              <span className={"error-icon"}>
                {formErrors && this.state.errors.email?<FontAwesome.FaExclamationTriangle/>:""}
              </span>
            </div>
            <div className={"form-fields"+ " " +(formErrors && this.state.errors.username ? "errors":"")}>
              <span className="icon"><FontAwesome.FaUser /></span>
              <input type="text" name="username" placeholder="Username" value={this.state.username} onChange={this.inputChanged} autoComplete="username"/>
              <span className={"error-icon"}>
                {formErrors && this.state.errors.username?<FontAwesome.FaExclamationTriangle/>:""}
              </span>
            </div>
            <div className={"form-fields"+ " " +(formErrors && this.state.errors.password ? "errors":"")}>
              <span className="icon"><FontAwesome.FaUnlockAlt /></span>
              <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.inputChanged} autoComplete="password"/>
              <span className={"error-icon"}>
                {formErrors && this.state.errors.password?<FontAwesome.FaExclamationTriangle/>:""}
              </span>
            </div>
            <div className={"form-fields"+ " " +(formErrors && this.state.errors.confirmpassword ? "errors":"")}>
              <span className="icon"><FontAwesome.FaLock /></span>
              <input type="password" name="confirmpassword" placeholder="Confirm Password" value={this.state.confirmpassword} onChange={this.inputChanged} autoComplete="confirmpassword"/>
              <span className={"error-icon"}>
                {formErrors && this.state.errors.confirmpassword?<FontAwesome.FaExclamationTriangle/>:""}
              </span>                         
            </div>
            <div className="condition">
              <p>By registering you agree to<br/> our <b>Terms</b> and <b>Privacy Police</b></p>
            </div>
            <div className="errors-list">
              {Object.keys(this.state.errors).map((key,value)=>{
                if(formErrors && this.state.errors[key].length) {
                  return (
                    <div className="error" key={key}>
                      {this.state.errors[key]}
                    </div>
                  )
                }
              })}            
            </div>
            <div className="register-button">
              <button className="submit" disabled={formErrors} onClick={this.submitForm}>Register</button>
            </div>
            <div className="navigate-to-sigin">
              <p>Already have an account?<b><Link to="/">SIGN IN</Link></b></p>
            </div>
          </form>
        </section>
      </React.Fragment>
    )
  }
}

export default RegisterationForm;
