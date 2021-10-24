import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { links } from './linksArray';
import './Header.css';

function Header() {
  const [selected, select] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  const linksList = (classname) => (
    <nav>
      <ul className={ classname }>
        { links.map((link, index) => 
          <li key={ index }>
            <Link
              to={ link.path }
              className={ link.cName === selected ? 'list-item selected' : 'list-item' }
              onClick={() => select(link.cName)}
            >
              {link.cName}
            </Link>
          </li> 
        )}
      </ul>
    </nav>
  );

  const menuClickHandle = () => {
    setMenuOpen(!menuOpen);
  }
  
  return(
    <header className="portfolio-header">
      <i className="bi-moon" />
      <h1>Guilherme Hermenegildo Junior</h1>
      <i className="bi-menu-down" onClick={ menuClickHandle } /> 
      <nav className="menu-container">
        { linksList('pages-list') } 
      </nav>
      { menuOpen &&
      (<div className="hamburguer-menu">
        <i className="bi-x-lg" onClick={ menuClickHandle } />
        <nav>
          { linksList('hamburguer-page-list') }
        </nav>
      </div>)
      }
    </header>
  );
}

export default Header;
