import React from 'react';
import englishCV from '../docs/GUILHERME-HERMENEGILDO-JUNIOR-CV-ENGLISH.pdf'
import portuguesCV from '../docs/GUILHERME-HERMENEGILDO-JUNIOR-CV.pdf'

function Curriculo() {
  return(
    <main>
      <h2>Currículo</h2>
      <a href={ englishCV } download>CV English</a>
      <a href={ portuguesCV } download>CV Português</a>
    </main>
  );
}

export default Curriculo;
