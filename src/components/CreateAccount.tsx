import React, {useState} from 'react';

export const CreateAccount: React.SFC<{}> = () => {
    const [usernameValue, setUsername] = useState("");
    const [passwordValue, setPassword] = useState("");
    return (
      <div>
        <h1>Create an Account</h1>
        <form onSubmit={function(event) {
                event.preventDefault();
                fetch('https://habbit-tracker-db.herokuapp.com/users/add', {
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
                <input type="submit" value="Create Account"></input>
            </form>
      </div>
    )
  };