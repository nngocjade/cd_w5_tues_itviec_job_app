import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>The homepage</h1>
      <Link to="/login"> Login Page</Link>
      <Link to="/test"> Test Page</Link>
    </div>
  );
};

export default Home;
