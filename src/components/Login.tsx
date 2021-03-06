import React, {useState} from 'react';
import {Link} from "react-router-dom";


export const Login: React.SFC<{}> = () => {
    const [usernameValue, setUsername] = useState("");
    const [passwordValue, setPassword] = useState("");
    return (
        <div>
            <h1>Habbit Tracker</h1>
            <h2>Login</h2>
            <form onSubmit={function(event) {
                event.preventDefault();
                fetch('https://habbit-tracker-db.herokuapp.com/users/login', {
                  method: "POST",
                  body: JSON.stringify({username: usernameValue, password: passwordValue}),
                  headers: {'Content-Type': 'application/json'}
                })
                .then(res => console.log(res))
                .catch(err => console.log('Error: ' + err));
            }}>
              <label><b>Username</b></label>
                <input type="text" placeholder="Enter Username" value={usernameValue} onChange={function(event) {
                    setUsername(event.target.value)
                }}/>
                <label><b>Password</b></label>
                <input type="password" placeholder="Enter Password" value={passwordValue} onChange={function(event) {
                    setPassword(event.target.value)
                }}/>
                <input type="submit" value="Login"></input>
            </form>
            <Link to="/create-account"><p>Create an Account</p></Link>
        </div>
    )
};