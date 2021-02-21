import React, {useState} from 'react';

export const Login: React.SFC<{}> = () => {
    const [usernameValue, setUsername] = useState("");
    const [passwordValue, setPassword] = useState("");
    return (
      <div>
        <form onSubmit={function(event) {
                event.preventDefault();
                fetch('https://habbit-tracker-db.herokuapp.com:46877/users/add', {
                  method: "POST",
                  body: JSON.stringify({username: usernameValue, password: passwordValue})
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
                <input type="submit" value="Submit"></input>
            </form>
      </div>
    )
  };