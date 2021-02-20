import React, {useState} from 'react';

let User = require('../models/user.model');

export const Login: React.SFC<{}> = () => {
    const [usernameValue, setUsername] = useState("");
    const [passwordValue, setPassword] = useState("");
    let userDetails = new User(usernameValue, passwordValue);

    return (
      <div>
        <form onSubmit={function(event) {
                event.preventDefault();
                fetch('httpslocalhost:5000/users/login', {
                  method: "POST",
                  body: JSON.stringify({username: usernameValue, password: passwordValue})
                })
                .then();
            }}>
              <label><b>Username</b></label>
                <input type="text" placeholder="Enter Username" value={usernameValue} onChange={function(event) {
                    setUsername(event.target.value)
                }}/>
                <label><b>Password</b></label>
                <input type="password" placeholder="Enter Password" value={passwordValue} onChange={function(event) {
                    setPassword(event.target.value)
                }}/>
            </form>
      </div>
    )
  };