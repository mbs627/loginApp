import React, { Component } from "react";
import axios from "axios";
import "./styles.css";
import { Box, Typography } from "@material-ui/core";

export class Home extends Component {
  state = {
    first_name: "",
    last_name: "",
    email: "",
    username: "",
  };

  logout = () => {
     localStorage.clear();
     window.location.href = "/login";
   }

  componentDidMount() {
    axios
      .get("/user/getDetails")
      .then(({ data: { first_name, last_name, email, username} }) => {
        this.setState({ first_name, last_name, email, username});
      })
      .catch((err) => console.log(err));
  }

  render() {
    const { first_name, last_name, email, username } = this.state;
    return (

      <Box boxShadow={3} className=" card auth-box center container">
      <div>
      <Typography variant="h2" className="font-weight-bold row title">
        User
      </Typography>
      <div>
        <div> <h3 class="subtitle">{first_name}{last_name}</h3> </div>
        <div> <h3>{email}</h3> </div>
        <div> <h3>{username}</h3> </div>

        <button class="auth mt-4 p-3 submit-button"
        variant="contained" onClick={this.logout}>Logout</button>
        </div>
        </div>
        </Box>
      );
  }
}

export default Home;
