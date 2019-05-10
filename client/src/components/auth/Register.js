import React, { Component } from "react";
import { Link } from "react-router-dom";

class Register extends Component {

  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      errors: {}
    };
  }

  onChange = e => {
      this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = e => {
      e.preventDefault();

      const newUser = {
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
        confirmPassword: this.state.confirmPassword
      };

      console.log(newUser);
  };

  render() {
      const { errors } = this.state;
      return (
        <div className="modal d-block" tabIndex="-1" role="dialog">
          <div className="modal-dialog register">
            <div className="modal-content">
              <div className="col s8 offset-s2">
                <Link to="/" className="btn-flat waves-effect exit log">
                  <i className="material-icons">keyboard_backspace</i> Bring me
                  home
                </Link>
                <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                  <h3>
                    <b>Sign</b> Up
                  </h3>
                  <p className="grey-text text-darken-1">
                    Already have an account? <Link to="/login" className="log">Log in</Link>
                  </p>
                </div>
                <form noValidate onSubmit={this.onSubmit}>
                  <div className="input-field col s12">
                    <input
                      onChange={this.onChange}
                      value={this.state.name}
                      error={errors.name}
                      id="name"
                      type="text"
                    />
                    <label htmlFor="name">Name</label>
                  </div>
                  <div className="input-field col s12">
                    <input
                      onChange={this.onChange}
                      value={this.state.email}
                      error={errors.email}
                      id="email"
                      type="email"
                    />
                    <label htmlFor="email">Email</label>
                  </div>
                  <div className="input-field col s12">
                    <input
                      onChange={this.onChange}
                      value={this.state.password}
                      error={errors.password}
                      id="password"
                      type="password"
                    />
                    <label htmlFor="password">Password</label>
                  </div>
                  <div className="input-field col s12">
                    <input
                      onChange={this.onChange}
                      value={this.state.password2}
                      error={errors.password2}
                      id="password2"
                      type="password"
                    />
                    <label htmlFor="password2">Confirm Password</label>
                  </div>
                  <div className="col s12 submit" style={{ paddingLeft: "11.250px" }}>
                    <button
                      style={{
                        width: "150px",
                        borderRadius: "3px",
                        letterSpacing: "1.5px",
                        marginTop: "1rem"
                      }}
                      type="submit"
                      className="btn btn-large waves-effect waves-light hoverable accent-3 register-btn"
                    >
                      Sign up
                    </button>
                  </div>
                  <p className="grey-text text-darken-1 google">
                      Or Sign Up With: 
                    <hr />
                    <Link to="/auth/google" className="log">
                      <img src="https://img.icons8.com/color/48/000000/google-logo.png"/>
                    </Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      );

  }

}

export default Register;