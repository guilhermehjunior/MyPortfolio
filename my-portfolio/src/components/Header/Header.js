import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { links } from './linksArray';
import './Header.css';

function Header() {
  const [selected, select] = useState('');

  return(
    <header className="portfolio-header">
      <h1>Guilherme Hermenegildo Junior</h1>
      <nav>
        <ul className="pages-list">
          { links.map((link) => 
            <li>
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
    </header>
  );
}

export default Header;
