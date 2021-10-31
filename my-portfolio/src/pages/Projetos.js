import React from 'react';
import CardProjeto from '../components/CardProjeto/CardProjeto';
import projects from '../docs/projects';

function Projetos() {
  return(
    <main className="projects-container">
      { projects.map((project) => <CardProjeto key={project.title} projeto={project} />)}
    </main>
  );
}

export default Projetos;
