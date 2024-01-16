import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import "./style.css";
import linkr from "../../assets/images/linkr.png"
import linkrCadastro from "../../assets/images/linkr - cadastro.jpg"
import linkrPesquisaUsuario from "../../assets/images/linkr - pesquisa usuário.png"
import linkTimeline from "../../assets/images/linkr - timeline.png"
import linkUserPosts from "../../assets/images/linkr - userposts.png"
import driventIngresso from "../../assets/images/Drivent - Ingresso.png"
import driventHotel from "../../assets/images/Drivent - Hote.png"
import drivenReserva from "../../assets/images/Drivent - Reservar.png"
import driventPagamento from "../../assets/images/Drivent - Pagamento.png"
import driventHospedagem from "../../assets/images/Drivent - Hospedagem.png"
import driventReservaP from "../../assets/images/Drivent - ReservaPessoa.png"
import driventDiasAtividades from "../../assets/images/Drivent - Atividades(Dias).png"
import driventAtividades from "../../assets/images/Drivent - Atividades.png"
import trackt from "../../assets/images/trackt - cadastro.png"
import tracktLogin from "../../assets/images/trackt - login.png"
import tracktHabito from "../../assets/images/trackt - habito.png"
import tracktSalvar from "../../assets/images/trackt - salvar babito.png"
import tracktCheck from "../../assets/images/trackt - check.png"








const projectDetailsMap = {
  'Rede social de compartilhamento de links': {
    descricao: 'A Rede Social de Compartilhamento é uma plataforma dinâmica que visa unir usuários por meio de interesses comuns, oferecendo uma experiência atraente e interativa. A interface do usuário foi projetada com foco na experiência do usuário, garantindo que a plataforma seja acessível e funcional em uma variedade de dispositivos e tamanhos de tela.',
    funcionalidades: "Design Responsivo, Pesquisa Avançada, Interação Social, Compartilhamento de links",
    tecnologias: 'React, Node.js, Express, PostgreSQL',
    images: [linkrCadastro, linkr, linkrPesquisaUsuario, linkTimeline, linkUserPosts],
  },
  'Sistema para gerenciamento de eventos': {
    descricao: 'Sistema White Label para gerenciamento de eventos. Inscrições simples, opções de hospedagem, formas de pagamento flexíveis, seleção de atividades personalizadas e emissão de certificados de participação.',
    tecnologias: 'Node.js, Express, PostgreSQL, React, Styled components',
    images: [driventIngresso, driventHotel,drivenReserva, driventPagamento, driventHospedagem, driventReservaP, driventDiasAtividades,driventAtividades]
  },
  'Aplicação completa de acompanhamento de hábitos': {
    descricao: " TrackIt é a sua nova ferramenta completa para acompanhar e cultivar hábitos saudáveis de forma simples e intuitiva. Desenvolvido com foco na sua experiência, oferecemos uma plataforma que facilita a gestão dos seus hábitos diários, promovendo uma rotina mais organizada e produtiva.",
    funcionalidades:"Login e Cadastro Rápido, Hábitos Diários, Histórico, Visualização Personalizada",
    tecnologias: 'React, Styled Components, Context API, PostgreSQL',
    images: [trackt, tracktLogin, tracktHabito, tracktSalvar, tracktCheck],
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
        <h6 className='tecnologias'>{details.tecnologias}</h6>
      </div>
      <div className="project-image">
        {details.images.map((image, index) => (
          <div key={index} className="image-container">
            <img className="linkr" src={image} alt={`${projectName} ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectDetails;
