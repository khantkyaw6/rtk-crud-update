import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <h1>No Result For Your Search</h1>
      <Link to='/'>
        <p>Please Return To Home Page</p>
      </Link>
    </div>
  );
};

export default NotFound;
