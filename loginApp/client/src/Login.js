import React, { Component } from "react";
import axios from "axios";
import "./styles.css";
import { Box, Button, TextField, Typography } from "@material-ui/core";

export class Login extends Component {
  state = { first_name: "", last_name: "", success: false, error: false };

  onLogin = (e) => {
    e.preventDefault();

    const { email, password } = this.state;

    axios({
      url: "/auth/login",
      method: "POST",
      data: { email, password },
    })
      .then((res) => {

        window.localStorage.setItem("isAuthenticated", false);
        if (res.status === 200) {
          this.setState({ success: true, error: false });
          this.props.history.push("/home");
        }
      })
      .catch(({ response }) => {
        this.setState({ error: response.data.message, success: false });
      });
  };

  onChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
      error: false,
      success: false,
    });
  };

  render() {
    const { error, success } = this.state;
    return (
      <div className="auth-background d-flex">
        <form class="" onSubmit={this.onLogin}>
          <Box boxShadow={3} className="auth-box center card">
            {success && "You've logged in successfully"}
            {error}
            <Typography variant="h5" className="font-weight-bold row title">
              Login
            </Typography>
            <div className="auth-inputs">
              <div className="auth-field">
                <span className="auth-subtitle">E-mail Address</span>
                <TextField
                  fullWidth
                  variant="outlined"
                  type="email"
                  name="email"
                  onChange={this.onChange}
                  required
                />
              </div>
              <div className="auth-field">
                <span className="auth-subtitle">Password</span>
                <TextField
                  fullWidth
                  variant="outlined"
                  type="password"
                  name="password"
                  onChange={this.onChange}
                  required
                />
              </div>
            </div>
            <Button
              fullWidth
              type="submit"
              className="mt-4 p-3 submit-button"
              variant="contained"
            >
              <Typography variant="h6" className="font-weight-bold">
                Login
              </Typography>
            </Button>
          </Box>
        </form>
      </div>
    );
  }
}

export default Login;
