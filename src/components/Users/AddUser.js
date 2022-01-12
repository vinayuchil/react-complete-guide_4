import React from "react";

import Card from "../UI/Card";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const AddUserHandler = (event) => {
    event.preventDefault();
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={AddUserHandler}>
        <label htmlFor="username">UserName</label>
        <input id="username" type="text"></input>

        <label htmlFor="age">Age</label>
        <input id="age" type="number"></input>

        <button type="submit">Add User</button>
      </form>
    </Card>
  );
};

export default AddUser;
