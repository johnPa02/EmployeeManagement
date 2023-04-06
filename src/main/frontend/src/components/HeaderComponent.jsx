import React from "react";
import SearchBarComponent from "./SearchBarComponent";

const HeaderComponent = () => {
  return (
    <header>
      <nav className="navbar navbar-light">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1">Employee Management App</span>
          <SearchBarComponent />
        </div>
      </nav>
    </header>
  );
};

export default HeaderComponent;
