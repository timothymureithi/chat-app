import React, { useState } from "react";

const NavBar = () => {
  const [user, setUser] = useState(false);
  const googleSignIn = () => {
    setUser(true);
  };
  
  const signOut = () => {
    setUser(false);
  };

  return (
    <nav className="nav-bar">
    
    </nav>
  );
};
export default NavBar;