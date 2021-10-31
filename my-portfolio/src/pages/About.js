import React, { useState } from 'react';
import AboutMeEN from '../components/AboutMeEN/AboutMeEN';
import AboutMePT from '../components/AboutMePT/AboutMePT';

function About() {
  const [english, setEnglish]= useState(false);

  return(
    <main>
      {
        english ? 
          <>
            <button onClick={() => setEnglish(!english)} type="button">Português</button>
            <AboutMeEN />
          </>
        :
          <>
            <button onClick={() => setEnglish(!english)} type="button">English</button>
            <AboutMePT />
          </>
      }
    </main>
  );
}

export default About;
