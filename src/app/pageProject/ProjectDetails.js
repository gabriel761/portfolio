import React, { useRef, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import "./style.css";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
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
import festumCriarLink from '../../assets/images/festum/criar-link.png'
import festumLoginSite from '../../assets/images/festum/login.png'
import festumOpcoesAcoes from '../../assets/images/festum/opcoes-acoes.png'
import festumEdicaoCadastroFornecedor from '../../assets/images/festum/edicao-cadastro-fornecedor.png'
import festumHomeCliente from '../../assets/images/festum/home-cliente.jpeg'
import festumListaFornecedores from '../../assets/images/festum/lista-fornecedores-home-cliente.jpeg'
import festumCategorias from '../../assets/images/festum/categorias.jpeg'
import festumPagFornecedor from '../../assets/images/festum/pag-fornecedor.jpeg'
import festumPerfil from '../../assets/images/festum/perfil.jpeg'
import festumHomeFornecedor from '../../assets/images/festum/home-fornecedor.jpeg'
import festumSubcategorias from '../../assets/images/festum/subcategorias.jpeg'
import festumLoginApp from '../../assets/images/festum/login.jpeg'
import oceanicaHome  from '../../assets/images/oceanica-sports/home.png'
import oceanicaEscudo from '../../assets/images/oceanica-sports/escudo.png'
import oceanicaCores from '../../assets/images/oceanica-sports/cores.png'
import oceanicaModelos from '../../assets/images/oceanica-sports/modelos.png'
import oceanicaNomeNumero from '../../assets/images/oceanica-sports/nome-numero.png'
import oceanicaPacotes from '../../assets/images/oceanica-sports/pacotes.png'
import lightPowerHome1 from '../../assets/images/lightpower/home1.jpg'
import lightPowerHome2 from '../../assets/images/lightpower/home2.jpg'
import lightPowerHome3 from '../../assets/images/lightpower/home3.jpg'
import lightPowerSobre1 from '../../assets/images/lightpower/sobre1.jpg'
import lightPowerSobre2 from '../../assets/images/lightpower/sobre2.jpg'
import lightPowerContato from '../../assets/images/lightpower/contato.jpg'
import enconarHome1 from '../../assets/images/enconar/home1.jpg'
import enconarHome2 from '../../assets/images/enconar/home2.jpg'
import enconarQuemSomos1 from '../../assets/images/enconar/quem-somos1.jpg'
import enconarQuemSomos2 from '../../assets/images/enconar/quem-somos2.jpg'
import enconarProjetos1 from '../../assets/images/enconar/projetos.jpg'
import enconarProjetos2 from '../../assets/images/enconar/projetos2.jpg'
import enconarContato from '../../assets/images/enconar/contato.jpg'








const projectDetailsMap = {
  'Enconar': {
    descricao: "Site institucional para uma empresa de projetos de climatização de ambientes e ar condicionados de grande porte. Cliente pediu um tema mais escuro para o site porém a logo podia ser utilizada apenas em fundo claro. A solução foi um design híbrido e harmônico.",
    funcionalidades: "Design responsivo, Formulário de contato, Otimização  SEO",
    tecnologias: 'HTML, CSS, JavaScript, PHP',
    images: [enconarHome1, enconarHome2, enconarQuemSomos1, enconarQuemSomos2, enconarProjetos1, enconarProjetos2, enconarContato],
  },
  'Light Power': {
    descricao: "Site institucional para uma empresa de energia solar no Rio de Janeiro. O cliente queria uma identidade visual de tema escuro e com as cores da empres. Outra especificação foi bastante movimento e animação na paginas.",
    funcionalidades: "Design responsivo, Formulário de contato, Otimização  SEO",
    tecnologias: 'HTML, CSS, JavaScript, PHP',
    images: [lightPowerHome1, lightPowerHome2, lightPowerHome3, lightPowerSobre1, lightPowerSobre2, lightPowerContato],
  },
  'Oceânica Sports': {
    descricao: "Projeto feito para uma empresa em Curitiba. O cliente precisava de um simulador de modelos de uniformes de times de futebol para que os clientes pudessem especificar exatamente o que eles queriam antes da fabricação. O projeto inclui um sistema de cadastro de modelos novos caso para que a empresa tenha controle de todo o catálogo disponível no banco de dados.",
    funcionalidades: "Mais de 210 modelos de times diferentes, Escolha de cores do modelo, Upload de logo, Posicionamento de escudo, Download de imagem do modelo final, Sistema de cadastro de modelos novos, Design responsivo",
    tecnologias: 'JavaScript, PHP, MySQL',
    images: [oceanicaHome, oceanicaEscudo, oceanicaCores, oceanicaModelos, oceanicaNomeNumero, oceanicaPacotes],
  },
  'Festum': {
    descricao: "Projeto feito para uma agência em São Paulo que pediu um aplicativo que juntasse organizadores de festa e vendedores de insumos para festas. O aplicativo conta com mais de 3 mil fornecedores cadastrados de toda a cidade de Piracicaba e tem previsão para expandir para outras cidades de São Paulo. O projeto inclui uma plataforma de administração para que a empresa dona do aplicativo possa ter total controle das contas cadastradas e consiga inclusive dar assistência ao fornecedor interessado durante o processo de cadastro.",
    funcionalidades: "Sistema de busca, Compartilhamento de link, Site administrativo, Categorias, Subcategorias, Envio de solicitação de orçamento, Link direto whatsapp, Link direto instagram, Sistema de pagamento, Sistema de anúncios pagos. ",
    tecnologias: 'React Native, Node.js, Express, PostgreSQL, Firebase, API Ipag',
    images: [festumLoginApp, festumHomeCliente, festumListaFornecedores, festumPerfil, festumHomeFornecedor, festumCategorias, festumPagFornecedor, festumSubcategorias, festumCriarLink, festumLoginSite, festumOpcoesAcoes, festumEdicaoCadastroFornecedor],
  },
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
  const [open, setOpen] = useState(false);
  const { projectName } = useParams();
  const location = useLocation();
  const { videoUrl } = location.state || {};

  const details = projectDetailsMap[projectName] || {};

  const lightboxImages = details.images.map((image) => ({src:image}));
  const indexLightbox = useRef(-1)

  const onclickImg = (index) => {
    indexLightbox.current = index
    setOpen(true);
  }
  return (
    
    <div className="project-details">
      <Lightbox
        open={open}
        index={indexLightbox.current}
        close={() => setOpen(false)}
        slides={lightboxImages}
      />
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
          <div onClick={() => onclickImg(index)} key={index} className="image-container">
            <img className="linkr" src={image} alt={`${projectName} ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectDetails;
