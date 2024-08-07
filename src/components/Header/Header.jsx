import React from 'react';
import "./Header.css";

const Header = ({title, subtitle}) => {
  return (
    <header className="header">
        <h2 className="primary-font primary-color">{title}</h2>
        <p className="secondary-font primary-color">{subtitle}</p>
    </header>
  )
}

export default Header