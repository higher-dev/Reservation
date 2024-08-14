import React from 'react';
import logo from '../../logo.png';
import './Header.scss';

function Header() {
  return (
    <header className="App-header">
        <div className="Logo-img">
            <a href="#">
                <img src={logo} className="App-logo" alt="logo" height="40px" />
            </a>
        </div>
    </header>
  );
}

export default Header;