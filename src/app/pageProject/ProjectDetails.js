// ProjectDetails.js
import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import "./style.css";

const projectDetailsMap = {
  '"Rede social de compartilhamento de links': {
    descricao: 'Compartilhamento de links, interação social, cadastro e login seguro.',
    tecnologias: 'React, Node.js, Express, PostgreSQL',
  },
  'outro-projeto': {
    descricao: 'Descrição personalizada para outro projeto.',
    tecnologias: 'Tecnologias específicas desse projeto',
  },
  // Adicione mais projetos conforme necessário
};

const ProjectDetails = () => {
  const { projectName } = useParams();
  const location = useLocation();
  const { videoUrl } = location.state || {};

  // Obtenha os detalhes do projeto com base no nome do projeto
  const details = projectDetailsMap[projectName] || {};

  return (
    <div className="project-details">
      <h1>Detalhes do Projeto: {projectName}</h1>
      {videoUrl && (
        <div className="video-wrapper">
          <video width="500" height="500" controls autoPlay loop muted src={videoUrl} alt="" />
        </div>
      )}
      <div className="project-content">
        <h2>Informações do Projeto</h2>
        <p className='descricao'>{details.descricao}</p>
        <p className='tecnologias'>{details.tecnologias}</p>
      </div>
    </div>
  );
};

export default ProjectDetails;
