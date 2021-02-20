import React from 'react';

export const Login: React.SFC<{}> = () => {
    return (
      <div>
        <label><b>Username</b></label>
        <input type="text" placeholder="Enter Username" name="uname" required></input>

        <label><b>Password</b></label>
        <input type="password" placeholder="Enter Password" name="psw" required></input>
      </div>
    )
  };