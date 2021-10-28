import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { links } from './linksArray';
import './Header.css';

function Header() {
  const [selected, select] = useState('');

  const menuClickHandle = () => {
    const menu = document.querySelector('.hamburguer-menu');
    menu.classList.toggle('open-menu');
  }

  const linkCLickHandle = (linkName) => {
    const menu = document.querySelector('.hamburguer-menu');
    menu.classList.remove('open-menu');
    select(linkName);
  }


  const linksList = (classname) => (
    <ul className={ classname }>
      { links.map((link, index) => 
        <li key={ index }>
          <Link
            to={ link.path }
            className={ link.cName === selected ? 'list-item selected' : 'list-item' }
            onClick={ () => linkCLickHandle(link.cName) }
          >
            {link.cName}
          </Link>
        </li> 
      )}
    </ul>
  );
  
  return(
    <header className="portfolio-header">
      <i className="bi-moon" />
      <h1 className="my-name">Guilherme Hermenegildo Junior</h1>
      <i className="bi-list" onClick={ menuClickHandle } /> 
      <nav className="menu-container">
        { linksList('pages-list') } 
      </nav>
      <div className="hamburguer-menu">
        <i className="bi-x-lg" onClick={ menuClickHandle } />
        <nav>
          { linksList('hamburguer-page-list') }
        </nav>
      </div>
    </header>
  );
}

export default Header;
