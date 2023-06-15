import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <h1 className="header-text">FireBond Task</h1>

      <style jsx>{`
  .header {
    background-color: #212121;
    padding: 20px;
    text-align: center;
  }

  .header-text {
    color: #ff5722;
    font-size: 32px;
    letter-spacing: 2px;
    margin: 0;
  }
`}</style>
    </header>
  );
};

export default Header;
