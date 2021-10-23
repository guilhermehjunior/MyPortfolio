import React from 'react';
import './Header.css';

function Header() {
  return(
    <header className="portfolio-header">
      <h1>Guilherme Hermenegildo Junior</h1>
      <nav>
        <ul className="pages-list">
          <li>Contatos</li>
          <li>Curriculo</li>
          <li>Habilidades</li>
          <li>Sobre mim</li>
          <li>Projetos</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
