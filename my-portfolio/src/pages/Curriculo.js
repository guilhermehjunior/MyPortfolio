import React, { useState } from 'react';
import CVpt from '../components/CVpt/CVpt';
import CVen from '../components/CVen/CVen';
import englishCV from '../docs/GUILHERME-HERMENEGILDO-JUNIOR-CV-ENGLISH.pdf'
import portuguesCV from '../docs/GUILHERME-HERMENEGILDO-JUNIOR-CV.pdf'

function Curriculo() {
  const [english, setEnglish] = useState(false);


  return(
    <main>
      {
        english ?
          <>
            <button onClick={() => setEnglish(!english)} type="button">Português</button>
            <CVen />
            <a href={ englishCV } download>Download</a>
          </>
          
        :
          <>
            <button onClick={() => setEnglish(!english)} type="button">English</button>
            <CVpt />
            <a href={ portuguesCV } download>Download</a>
          </>
      }
    </main>
  );
}

export default Curriculo;
