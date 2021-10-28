import React, { useState } from 'react';

function About() {
  const [english, setEnglish]= useState(false);



  return(
    <main>
      {
        english ? 
          <>
            <button onClick={() => setEnglish(!english)} type="button">Português</button>
            <h2>About Me</h2>
            <p>I am from Florianópolis-SC-Brazil, but I lived most of my live in Curitiba-PR-Brazil. Nowadays I live in Medianeira-PR-Brazil(next to Foz do Iguaçu-PR-Brazil).</p>
            <p>I am a Software Development student at Trybe, I am excited about new challenges and knowledge. I am graduated in Electric Engeneering by UFPR, where I started having interest in development.</p>
            <p>My greatest goal is to do something that improves people's lives and I belive that in this new direction I am taking, several opportunities will arise.</p>
            <p>My <em>hobbies</em> are: playing Vídeo Games and board games, reading, exercising, watching movies and cooking. I also enjoy watching videos on youtube about: games, programming languages and culinary.</p>
            <p>Something I want to get better at is: to not procrastinate, I've been avoiding leaving every for the last days, so I can have more time do more things with more quality.</p>
            <img src="https://media-exp1.licdn.com/dms/image/D4D35AQHa-nCIaktp6w/profile-framedphoto-shrink_200_200/0/1631735689013?e=1635523200&v=beta&t=3Q-Z7BWKUPazM4oKXiM7wxXvXVQKhG_ehgztocQhpO8" alt="foto Guilherme H Jr"/>
          </>
        :
          <>
            <button onClick={() => setEnglish(!english)} type="button">English</button>
            <h2>Sobre Mim</h2>
            <p>Sou natural de Florianópolis-SC, mas morei a maior parte da minha vida em Curitiba-PR. Atualmente resido na cidade de Medianeira-PR(Próxima a Foz do Iguaçu).</p>
            <p>Sou Estudante de Desenvolvimento de Software na Trybe, empolgado por conhecimentos e desafios novos. Também sou formado em engenharia elétrica pela UFPR, que foi onde comecei a gostar de desenvolvimento.</p>
            <p>Meu maior objetivo é realizar algo que melhore a vida das pessoas e acredito que nesse novo rumo que estou tomando surgirão diversas oportunidades.</p>
            <p>Como <em>hobbies</em>, eu gosto de jogar(Vídeo Games, jogos de tabuleiro), ler, praticar atividades físicas, assistir filmes e cozinhar. Também gosto de assistir vídeos no youtube sobre: jogos, linguagens de programação e culinária.</p>
            <p>Um ponto que tenho trabalhado para melhorar é: a procrastinação, tenho evitado deixar tudo para a última hora, para assim ter mais tempo para desenvolver o necessário e com uma qualidade maior.</p>
            <img src="https://media-exp1.licdn.com/dms/image/D4D35AQHa-nCIaktp6w/profile-framedphoto-shrink_200_200/0/1631735689013?e=1635523200&v=beta&t=3Q-Z7BWKUPazM4oKXiM7wxXvXVQKhG_ehgztocQhpO8" alt="foto Guilherme H Jr"/>
          </>
      }
    </main>
  );
}

export default About;
