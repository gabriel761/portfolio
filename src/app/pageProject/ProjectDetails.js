// ProjectDetails.js
import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import "./style.css";
import linkr from "../../assets/images/linkr.png"

const projectDetailsMap = {
  'Rede social de compartilhamento de links': {
    descricao: 'A Rede Social de Compartilhamento é uma plataforma dinâmica que visa unir usuários por meio de interesses comuns, oferecendo uma experiência atraente e interativa.A interface do usuário foi projetada com foco na experiência do usuário, garantindo que a plataforma seja acessível e funcional em uma variedade de dispositivos e tamanhos de tela',
    funcionalidades: "Design Responsivo, Pesquisa Avançada, Interação Social, Compartilhamento de links",
    tecnologias: 'React, Node.js, Express, PostgreSQL',
    image: linkr,
  },
  'Sistema para gerenciamento de eventos': {
    descricao: 'Sistema White Label para gerenciamento de eventos. Inscrições simples, opções de hospedagem, formas de pagamento flexíveis, seleção de atividades personalizadas e emissão de certificados de participação.',
    tecnologias: 'Node.js, Express, PostgreSQL, React, Styled components',
  },
  'Aplicação completa de acompanhamento de hábitos': {
    descricao: 'Com uma interface intuitiva, você pode facilmente adicionar novos hábitos e fazer um acompanhamento, fornecendo descrições detalhadas e estabelecendo datas para começar',
    tecnologias: '',
  },
};

const ProjectDetails = () => {
  const { projectName } = useParams();
  const location = useLocation();
  const { videoUrl } = location.state || {};

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
        <p className='descricao'>{details.funcionalidades}</p>
        <p className='tecnologias'>{details.tecnologias}</p>

      </div>
      <div className="project-image">
        {[1, 2, 3, 4, 5].map((_, index) => (
          <div key={index} className="image-container">
            <img className="linkr" src={details.image} alt={`Linkr ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectDetails;
