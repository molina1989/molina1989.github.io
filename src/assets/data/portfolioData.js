// src/assets/data/portfolioData.js

// Importa todas tus imágenes de logos aquí para que Vite/Webpack las procese
//import phpLogo from '../img/php-logo.svg';
//import pythonLogo from '../img/python-logo.svg';
//import jsLogo from '../img/javascript-logo.svg';
//import laravelLogo from '../img/laravel-logo.svg';
//import djangoLogo from '../img/django-logo.svg';
//import vueLogo from '../img/vuejs-logo.svg';
//import reactLogo from '../img/react-logo.svg';
//import mysqlLogo from '../img/mysql-logo.svg';
//import postgresqlLogo from '../img/postgresql-logo.svg';
//import gitLogo from '../img/git-logo.svg';
//import dockerLogo from '../img/docker-logo.svg';
//import awsLogo from '../img/aws-logo.svg';

// Importa imágenes de proyectos
//import projectEcommerce from '../img/project-ecommerce.jpg';
//import projectTaskManager from '../img/project-taskmanager.jpg';
//import projectDashboard from '../img/project-dashboard.jpg';


export const personalInfo = {
  name: 'Edison Molina',
  title: 'Desarrollador Full Stack',
  specialty: 'Php, Python & Javascript',
  profilePic: require('../images/perfil.png'), // Usa require para Vue CLI, o importa directamente con Vite
  email: 'molina1989@gmail.com',
  socialLinks: [
    { name: 'GitHub', url: 'https://github.com/molina1989', icon: ['fab', 'github'] },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/edisonrmolinar/', icon: ['fab', 'linkedin']},
    { name: 'CV', url: '/EDISON-MOLINA-CV.pdf', icon: ['fas', 'file-pdf'] }
  ],
  externalLinks: [ // Enlaces que no son redes sociales directas
    //{ name: '', url: '', icon: 'fas fa-blog' },
  ]
};

export const aboutContent = `
Soy un Ingeniero de Desarrollo con más de una década de experiencia comprobada, combinando una sólida base académica (TSU en Informática e Ing. en Desarrollo Endógeno) con una trayectoria profesional versátil. Mis inicios en el desarrollo de software en PDVSA - Guardián del Alba me equiparon con la experiencia fundamental para dominar el ciclo de vida completo de proyectos, desempeñando roles clave desde Analista y Programador hasta Arquitecto de Bases de Datos. Esta experiencia me ha convertido en un desarrollador full-stack adaptable, experto en integrar ecosistemas robustos utilizando Python, PHP, JavaScript, y PostgreSQL, con familiaridad en sistemas como Odoo y metodologías con Git. Actualmente, mi enfoque se centra en la creación de soluciones dinámicas y eficientes utilizando tecnologías modernas como Laravel y Vue.js, complementadas por mi conocimiento en Django, Laravel, Node.js, React, Vue y Angular. Busco aplicar esta rica experiencia técnica para impulsar el éxito en proyectos desafiantes, desde la arquitectura backend hasta la implementación frontend intuitiva.
`;

export const experience = [
  {
    id: 1,
    company: 'Addiuva, Uruguay.',
    position: 'ADMINISTRADOR DE BASE DE DATOS Y SISTEMAS',
    period: 'Mayo 2021 - Presente',
    description: `
      Lideré un equipo de 4 desarrolladores en el diseño, desarrollo y despliegue de una plataforma SaaS para la gestión de proyectos.
      <br>
      Implementé una arquitectura de microservicios con Docker y Kubernetes, mejorando la escalabilidad del sistema en un 40%.
      <br>
      Optimicé consultas de base de datos MySQL, resultando en una reducción del 30% en los tiempos de respuesta.
      <br>
      Introduje metodologías Agile/Scrum, incrementando la eficiencia del equipo en un 25%.
    `,
    technologies: ['PHP', 'Laravel', 'Vue.js', 'JavaScript', 'TypeScript', 'Jquery', 'Npm', 'Composer', 'Mysql', 'Docker', 'API REST', 'Asterisk', 'Ssh', 
      'Shell Scripting', 'Bash', 'Vicidial', 'Git', 'CI/CD', 'Endian', 'Nginx', 'Linux']
  },
  {
    id: 2,
    company: 'Interfell',
    position: 'Desarrollador frontend',
    period: 'Mayo 2022 - Mayo 2023',
    description: `
      Desarrollé y mantuve el backend de una aplicación de e-commerce de alto tráfico utilizando Python (Django) y MySQL.
      <br>
      Implementé integraciones con pasarelas de pago (Stripe, PayPal) y APIs de terceros.
      <br>
      Refactoricé código legado para mejorar la mantenibilidad y el rendimiento del sistema.
    `,
    technologies: ['Angular', 'JavaScript', 'TypeScript', 'API REST', 'C#', 'Sql server', 'Npm', 'Git', 'Trello', 'CI/CD', 'Linux']
  },
  {
    id: 3,
    company: 'Interamerican Assist (Addiuva), Uruguay',
    position: 'ADMINISTRADOR DE BASE DE DATOS Y SISTEMAS',
    period: 'Octubre 2018 - Mayo 2021',
    description: `
      Participé en el desarrollo frontend con JavaScript y jQuery para un sistema de gestión de contenidos.
      <br>
      Colaboré en la creación de componentes reutilizables con Vanilla JS.
      <br>
      Aprendí y apliqué buenas prácticas de desarrollo y control de versiones con Git.
    `,
    technologies: ['PHP', 'Laravel', 'Vue.js', 'JavaScript', 'TypeScript', 'Jquery', 'Npm', 'Composer', 'Mysql', 'Docker', 'API REST', 'Asterisk', 'Ssh', 
      'Shell Scripting', 'Bash', 'Vicidial', 'Git', 'CI/CD', 'Endian', 'Nginx', 'Linux']
  },
  {
    id: 4,
    company: 'Clientify, España',
    position: 'DESARROLLADOR FULL-STACK',
    period: 'Enero 2021 - Marzo 2021',
    description: `
      Participé en el desarrollo frontend con JavaScript y jQuery para un sistema de gestión de contenidos.
      <br>
      Colaboré en la creación de componentes reutilizables con Vanilla JS.
      <br>
      Aprendí y apliqué buenas prácticas de desarrollo y control de versiones con Git.
    `,
    technologies: [ 'Mysql', 'Python', 'API REST', 'Django', 'JavaScript', 'jQuery' ,'Git', 'CI/CD', 'Linux']
  },
  {
    id: 5,
    company: 'Woonder Moon Inc, Panama',
    position: 'DESARROLLADOR DE SOFTWARE',
    period: 'Enero 2017 - Marzo 2017',
    description: `
      Participé en el desarrollo frontend con JavaScript y jQuery para un sistema de gestión de contenidos.
      <br>
      Colaboré en la creación de componentes reutilizables con Vanilla JS.
      <br>
      Aprendí y apliqué buenas prácticas de desarrollo y control de versiones con Git.
    `,
    technologies: ['JavaScript', 'Angular', 'Node.js', 'Express', 'Mysql', 'API REST', 'Git', 'CI/CD', 'Nginx', 'Linux']
  },
  {
    id: 6,
    company: 'GMT PRIME CORP, España',
    position: 'DESARROLLADOR FULL- STACK',
    period: 'Junio 2017 - Julio 2018',
    description: `
      Participé en el desarrollo frontend con JavaScript y jQuery para un sistema de gestión de contenidos.
      <br>
      Colaboré en la creación de componentes reutilizables con Vanilla JS.
      <br>
      Aprendí y apliqué buenas prácticas de desarrollo y control de versiones con Git.
    `,
    technologies: ['React', 'JavaScript', 'Python', 'Django',  'API REST', 'Git', 'CI/CD', 'Bitbucket', 'Nginx', 'Linux']
  },
  {
    id: 7,
    company: 'Techmnh, India',
    position: 'DESARROLLADOR FRONTEND',
    period: 'Enero 2017 - Marzo 2017',
    description: `
      Participé en el desarrollo frontend con JavaScript y jQuery para un sistema de gestión de contenidos.
      <br>
      Colaboré en la creación de componentes reutilizables con Vanilla JS.
      <br>
      Aprendí y apliqué buenas prácticas de desarrollo y control de versiones con Git.
    `,
    technologies: ['React', 'JavaScript', 'Git', 'GitHub', 'Linux']
  },
  {
    id: 8,
    company: 'Empresa Socialista de Capital Mixto Guardian del Alba S.A, Venezuela.',
    position: 'DESARROLLADOR FULL STACK',
    period: 'Octubre 2012 - Febrero 2018',
    description: `
      Participé en el desarrollo frontend con JavaScript y jQuery para un sistema de gestión de contenidos.
      <br>
      Colaboré en la creación de componentes reutilizables con Vanilla JS.
      <br>
      Aprendí y apliqué buenas prácticas de desarrollo y control de versiones con Git.
    `,
    technologies: ['Python', 'Odoo', 'PHP', 'Laravel', 'JavaScript', 'Qooxdoo', 'Jquery', 'Codeigniter', 'Symphony', 'Mysql', 'Docker', 'API REST', 'Ssh', 
      'Shell Scripting', 'Bash', 'Git', 'GitLab', 'Svn', 'CI/CD', 'Nginx', 'Linux']
  }


];

export const featuredProjects = [
  {
    id: 1,
    title: 'Plataforma de E-commerce Multi-vendor',
    description: 'Solución completa de e-commerce con funcionalidades de múltiples vendedores, carrito de compras, sistema de pedidos y pasarelas de pago.',
    technologies: ['Laravel', 'Vue.js', 'Tailwind CSS', 'PostgreSQL', 'Stripe', 'Redis'],
   // image: projectEcommerce,
    github: 'https://github.com/janedoe/ecommerce-platform',
    live: 'https://ecommerce.janedoe.com'
  },
  {
    id: 2,
    title: 'Sistema de Gestión de Proyectos con Kanban',
    description: 'Aplicación web para la gestión de tareas y proyectos con tableros Kanban interactivos, asignación de usuarios y seguimiento de progreso.',
    technologies: ['Django', 'React', 'DRF', 'MySQL', 'WebSockets', 'AWS EC2'],
    //image: projectTaskManager,
    github: 'https://github.com/janedoe/task-manager',
    live: 'https://kanban.janedoe.com'
  },
  {
    id: 3,
    title: 'Dashboard de Análisis de Datos en Tiempo Real',
    description: 'Panel interactivo para visualizar métricas de negocio con gráficos dinámicos y filtros avanzados, alimentado por datos en tiempo real.',
    technologies: ['Node.js', 'Express', 'Vue.js', 'MongoDB', 'Chart.js', 'Socket.IO'],
   // image: projectDashboard,
    github: 'https://github.com/janedoe/realtime-dashboard',
    live: null // Sin demo en vivo por ahora
  }
];

export const otherProjects = [
  {
    id: 1,
    title: 'CLI para Generación de Componentes Vue',
    description: 'Herramienta de línea de comandos para agilizar la creación de componentes y módulos en proyectos Vue.',
    technologies: ['Node.js', 'Commander.js'],
    github: 'https://github.com/janedoe/vue-cli-gen',
  },
  {
    id: 2,
    title: 'Bot de Telegram para Gestión de Eventos',
    description: 'Bot programado en Python para organizar y recordar eventos en grupos de Telegram, con integración de calendarios.',
    technologies: ['Python', 'python-telegram-bot', 'SQLite'],
    github: 'https://github.com/janedoe/telegram-event-bot',
  },
  {
    id: 3,
    title: 'Extension de Navegador para Productivity',
    description: 'Extensión simple para Chrome/Firefox que bloquea sitios distractores y muestra un resumen de tareas pendientes.',
    technologies: ['JavaScript', 'HTML', 'CSS', 'Web Extensions API'],
    github: 'https://github.com/janedoe/productivity-extension',
  }
];


export const skills = [
  { 
    category: 'Lenguajes', 
    items: [
      {name: 'PHP', icon: ['fab', 'php']}, {name: 'Python', icon: ['fab', 'python']}, {name: 'JavaScript', icon: ['fab', 'js']},
      
    ] 
  },
  { 
    category: 'Frameworks Backend', 
    items: [{name: 'Laravel', icon: ['fab', 'laravel']}, {name: 'Django', icon: ['fab', 'python']},
      {name: 'Express.js', icon: ['fab', 'express']}, {name: 'Sail.js', icon: ['fab', 'sail']}, {name: 'Nodejs', icon: ['fab', 'node']}
    ] 
  },
  { 
    category: 'Frameworks Frontend', 
    items: [
      {name: 'React', icon: ['fab', 'react']},
      {name: 'Vue.js', icon: ['fab', 'vuejs']}, 
      {name: 'Angular', icon: ['fab', 'angular']},
      {name: 'Jquery', icon: ['fab', 'jquery']},
      {name: 'Qooxdoo', icon: ['fab', 'react']},
    ] 
  },
  { 
    category: 'Maquetación & Estilos', 
    items: [
      {name: 'Html5', icon: ['fab', 'python']}, {name: 'Css', icon: ['fab', 'js']},
      {name: 'Vuetify', icon: ['fab', 'react']},
      {name: 'Angular Material', icon: ['fab', 'react']},
      {name: 'Material Desing', icon: ['fab', 'react']},
      {name: 'Bootstrap', icon: ['fab', 'react']},
    ] 
  },
  { 
    category: 'Bases de Datos', items: [{name: 'MySQL', icon: ['fa', 'database']}, {name: 'PostgreSQL', icon: ['fa', 'database']}, {name: 'Sql Server', icon: ['fa', 'database']}] 
  },
  { 
    category: 'Herramientas & Cloud', 
    items: [
      {name: 'Git', icon: ['fab', 'git']}, {name: 'Github', icon: ['fab', 'github']}, {name: 'Gitlab', icon: ['fab', 'gitlab']}, 
      {name: 'Bitbucket', icon: ['fab', 'bitbucket']}, {name: 'Docker', icon: ['fab', 'docker']}, {name: 'AWS', icon: ['fab', 'aws']},
      {name: 'Npm', icon: ['fab', 'npm']}, {name: 'Composer', icon: ['fab', 'composer']}, {name: 'Pnpm', icon: ['fab', 'pnpm']},
      {name: 'Yarn', icon: ['fab', 'yarn']}, {name: 'Pip', icon: ['fab', 'pip']}, {name: 'PyPI', icon: ['fab', 'pypi']},
    ] 
  },
  { 
    category: 'Sistemas Operativos', 
    items: [
      {name: 'Linux', icon: ['fab', 'linux']}, {name: 'Windows', icon: ['fab', 'windows']}, 
      {name: 'Ubuntu', icon: ['fab', 'ubuntu']}, {name: 'Debian', icon: ['fab', 'debian']}, 
      {name: 'Centos', icon: ['fab', 'centos']}, 
    ] 
  },
];