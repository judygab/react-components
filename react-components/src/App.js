import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Navbar>
      <NavItem icon="😂" />
      <NavItem icon="👾">
        <Dropdown />
      </NavItem>
    </Navbar>
  );
}

function DropdownMenu() {

  function DropdownItem(props) {
    return (
      <a href="#" className="menu-item">
        <span className="icon-left">{props.leftIcon}</span>
        {props.children}
        <span className="icon-right">{props.rightIcon}</span>
      </a>
    )
  }

  return (
    <div className="dropdown">
      <DropdownItem>My Profile</DropdownItem>
      <DropdownItem leftIcon="✌️"></DropdownItem>
    </div>
  );
}

function Navbar(props) {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">{ props.children }</ul>
    </nav>
  );
}

function NavItem(props) {

  const [opem, setOpen] = useState(false);
  return (
    <li className="nav-item">
      <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
        {props.icon}
      </a>

      {open && props.children}
    </li>
  )
}

export default App;
