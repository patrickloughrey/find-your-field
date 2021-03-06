import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
    };
  }

  onChange = e => {
      this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = e => {
      e.preventDefault();
      const userData = {
        email: this.state.email,
        password: this.state.password
      };

      console.log(userData);

  };

render() {
    const { errors } = this.state;
    return (
      <div className="modal d-block" tabIndex="-1" role="dialog">
        <div className="modal-dialog login">
            <div style={{ marginTop: "4rem" }} className="modal-content">
              <div className="col s8 offset-s2">
                <Link to="/" className="btn-flat waves-effect exit log">
                  <i className="material-icons left">keyboard_backspace</i> Back to
                  home
                </Link>
                <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                  <h3>
                    <b>Login</b>
                  </h3>
                  <p className="grey-text text-darken-1">
                    Don't have an account? <Link to="/register" className="log">Register</Link>
                  </p>
                </div>
                <form noValidate onSubmit={this.onSubmit}>
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
                  <div className="col s12 submit" style={{ paddingLeft: "11.250px" }}>
                    <button
                      style={{
                        width: "150px",
                        borderRadius: "3px",
                        letterSpacing: "1.5px",
                        marginTop: "1rem"
                      }}
                      type="submit"
                      className="btn btn-large waves-effect waves-light hoverable accent-3"
                    >
                      Login
                    </button>
                  </div>
                  <p className="grey-text text-darken-1 google">
                      Or Sign Up With:
                    <hr />
                    <a href="/auth/google" className="log"> <img src="https://img.icons8.com/color/48/000000/google-logo.png"/> </a>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
    );

  }

}

function mapStateToProps(state) {
  return { auth: state.auth };
}

export default connect(mapStateToProps)(Login);