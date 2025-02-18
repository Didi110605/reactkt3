import React from "react";

const Header = ({ onScrollToFooter }) => {
  return (
    <header className="header">
      <h1>Product</h1>
      <button onClick={onScrollToFooter} className="button">Scroll to Footer</button>
    </header>
  );
};

export default Header;