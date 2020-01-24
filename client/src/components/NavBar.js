import React from "react";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <h1>Book </h1>
      <a className="navbar-brand" href="/">
        Search
      </a>
      <a className="navbar-brand" href="/saved">
        Saved
      </a>
    </nav>
  );
}

export default NavBar;