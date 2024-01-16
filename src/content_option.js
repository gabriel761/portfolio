import linkr from "./assets/images/linkr.png"
import linkrGif from "./assets/images/linkr.mp4"
import drivent from "./assets/images/drivent.mp4"
import trackt from "./assets/images/trackt.mp4"


const logotext = "JOÃO";
const meta = {
    title: "John Doe",
    description: "I’m Jull stack developer,currently working in Rio de Janeiro",
};

const introdata = {
    title: "I’m João Brother",
    animated: {
        first: "I love coding",
        second: "I code cool websites",
        third: "I develop mobile apps",
    },
    description: "Digite algo maneiro João",
    your_img_url: "https://images.unsplash.com/photo-1514790193030-c89d266d5a9d",
};

const dataabout = {
    title: "abit about my self",
    aboutme: "Hi, I'm João Gabriel, a software developer from Rio de Janeiro, Brazil. Specializing in React, React Native, Node.js, and more. I've worked on diverse projects like Festum and Simulador Oceânica. Fluent in Spanish, with advanced English skills. Excited about crafting impactful solutions and contributing to innovative project",
};
const worktimeline = [{
        jobtitle: "Designer of week",
        where: "YAdfi",
        date: "2020",
    },
    {
        jobtitle: "Designer of week",
        where: "Jamalya",
        date: "2019",
    },
    {
        jobtitle: "Designer of week",
        where: "ALquds",
        date: "2019",
    },
];

const skills = [
    {
        name: "React",
        value: 90,
    },
    {
        name: "React Native",
        value: 85,
    },
    {
        name: "Vue",
        value: 80,
    },
    {
        name: "Node.js",
        value: 75,
    },
   
    {
        name: "Typescript",
        value: 70,
    },
    {
        name: "PostgreSQL",
        value: 75,
    },
    {
        name: "MySQL",
        value: 70,
    },

    {
        name: "GitHub",
        value: 80,
    },
    {
        name: "JavaScript",
        value: 85,
    },
    {
        name: "PHP",
        value: 75,
    },
    {
        name: "Java",
        value: 70,
    },
    {
        name: "Figma",
        value: 80,
    },
];


const services = [
    {
        title: "Front-end Development",
        description: "Experienced in creating responsive and visually appealing user interfaces using technologies like React, Vue, and jQuery.",
    },
    {
        title: "Mobile App Development",
        description: "Skilled in developing cross-platform mobile applications using React Native, providing seamless user experiences on iOS and Android.",
    },
    {
        title: "Full-stack Development",
        description: "Proficient in building end-to-end web applications, utilizing technologies such as Node.js and Express.js for server-side development and PostgreSQL/MySQL for database management.",
    },
    {
        title: "Web Design",
        description: "Adept at crafting engaging and user-centric web designs with a focus on user experience, incorporating tools like Figma, Photoshop, Illustrator, and Adobe XD.",
    },
    {
        title: "E-commerce Solutions",
        description: "Experienced in developing e-commerce platforms, providing solutions for online businesses with features tailored to specific needs.",
    },
];



const dataportfolio = [{
        gif: linkrGif,
        title:"Rede social de compartilhamento de links",
        description: "Cadastro e Login Intuitivos, compartilhamento de links, siga outros usuários, comente, curta e descubra as trends do momento.",
    },
    {
        gif: drivent,
        title:"Sistema para gerenciamento de eventos",
        description: "Sistema White Label para gerenciamento de eventos. Inscrições simples, opções de hospedagem, formas de pagamento flexíveis, seleção de atividades personalizadas e emissão de certificados de participação.",
       
    },
    {

        gif: trackt,
        title:"Aplicação completa de acompanhamento de hábitos",
        description: "Com uma interface intuitiva, você pode facilmente adicionar novos hábitos e fazer um acompanhamento, fornecendo descrições detalhadas e estabelecendo datas para começar",
    },
]
const contactConfig = {
    YOUR_EMAIL: "jg.7651@gmail.com ",
    YOUR_FONE: "+55 21 96018-3131",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vehicula eu nunc et sollicitudin. Cras pulvinar, nisi at imperdiet pharetra. ",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_id",
    YOUR_TEMPLATE_ID: "template_id",
    YOUR_USER_ID: "user_id",
};

const socialprofils = {
    github: "https://github.com/gabriel761",
    facebook: "https://www.facebook.com/joaogabriel.broderpalacios",
    linkedin: " https://www.linkedin.com/in/joao-gabriel-broder-61a362231/",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};