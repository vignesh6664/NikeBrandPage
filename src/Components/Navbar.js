import React from "react";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <img src="./assets/logo.png" alt="" />
      </div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Category</li>
        <li>Contact</li>
      </ul>
      <button>Login</button>
    </nav>
  );
};

export default Navbar;
