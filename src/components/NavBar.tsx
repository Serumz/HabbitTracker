import React from 'react';
import {Link} from "react-router-dom";

export const NavBar: React.SFC<{}> = () => {
    return (
        <div>
          <Link to="/account"><h2>Account Login</h2></Link>
      </div>
    )
};