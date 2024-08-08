import { Component } from "react";
import classes from "./User.module.css";

class User extends Component {
  componentWillUnmount() {
    let styling = "padding: 0.15rem; background: red; color: white";
    console.log("%cUsers will unmount", styling);
  }

  render() {
    return <li className={classes.user}>{this.props.name}</li>;
  }
}

// const User = (props) => {
//   return <li className={classes.user}>{props.name}</li>;
// };

export default User;
