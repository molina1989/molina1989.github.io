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
      <ul>
        <li><strong>Automatización y Scripting:</strong> Diseñé e implementé scripts avanzados en Bash, Shell y Perl para la automatización de procesos internos, reduciendo tiempos de ejecución y minimizando el margen de error operativo en el entorno Linux.</li>
        <li><strong>Administración de Infraestructura y Telefonía:</strong> Supervisé y optimicé plataformas de comunicación críticas basadas en Asterisk y Vicidial, garantizando la alta disponibilidad y la estabilidad de los sistemas de voz.</li>
        <li><strong>Gestión de Base de Datos y Contenerización:</strong> Responsable de la administración, diseño y optimización de bases de datos MySQL, asegurando la integridad de los datos y desplegando entornos eficientes y replicables mediante Docker.</li>
        <li><strong>Desarrollo Full Stack:</strong> Colaboré en el desarrollo y mantenimiento de aplicaciones web internas utilizando Laravel (PHP), Vue.js, HTML5, CSS3 y Java, integrando soluciones de software con la infraestructura existente bajo control de versiones con Git.</li>
      </ul>
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
      <ul>
        <li><strong>Desarrollo Modular:</strong> Diseñé e implementé módulos y componentes reutilizables utilizando Angular (versiones 8 a 13), asegurando una arquitectura limpia, escalable y de fácil mantenimiento.</li>
        <li><strong>Diseño de Interfaz y UI/UX:</strong> Creé interfaces de usuario (UI) modernas, intuitivas y responsivas mediante el uso de Angular Material, CSS moderno y JavaScript, garantizando una experiencia de usuario fluida.</li>
        <li><strong>Integración de Datos:</strong> Trabajé en la estructuración, consumo y manipulación de datos en formatos complejos como XML, integrando servicios backend con la lógica del frontend de manera eficiente.</li>
        <li><strong>Colaboración y Buenas Prácticas:</strong> Formé parte de un equipo distribuido en entornos ágiles, gestionando el ciclo de vida del código a través de Git y GitHub mediante la revisión de código (Pull Requests) y control de versiones efectivo.</li>
      </ul>
    `,
    technologies: ['Angular', 'JavaScript', 'TypeScript', 'API REST', 'C#', 'Sql server', 'Npm', 'Git', 'Trello', 'CI/CD', 'Linux']
  },
  {
    id: 3,
    company: 'Interamerican Assist (Addiuva), Uruguay',
    position: 'ADMINISTRADOR DE BASE DE DATOS Y SISTEMAS',
    period: 'Octubre 2018 - Mayo 2021',
    description: `
      <ul>
        <li><strong>Automatización y Scripting:</strong> Diseñé e implementé scripts avanzados en Bash, Shell y Perl para la automatización de procesos internos, reduciendo tiempos de ejecución y minimizando el margen de error operativo en el entorno Linux.</li>
        <li><strong>Administración de Infraestructura y Telefonía:</strong> Supervisé y optimicé plataformas de comunicación críticas basadas en Asterisk y Vicidial, garantizando la alta disponibilidad y la estabilidad de los sistemas de voz.</li>
        <li><strong>Gestión de Base de Datos y Contenerización:</strong> Responsable de la administración, diseño y optimización de bases de datos MySQL, asegurando la integridad de los datos y desplegando entornos eficientes y replicables mediante Docker.</li>
        <li><strong>Desarrollo Full Stack:</strong> Colaboré en el desarrollo y mantenimiento de aplicaciones web internas utilizando Laravel (PHP), Vue.js, HTML5, CSS3 y Java, integrando soluciones de software con la infraestructura existente bajo control de versiones con Git.</li>
      </ul>
    `,
    technologies: ['PHP', 'Laravel', 'Vue.js', 'JavaScript', 'TypeScript', 'Jquery', 'Npm', 'Composer', 'Mysql', 'Docker', 'API REST', 'Asterisk', 'Ssh', 
      'Shell Scripting', 'Bash', 'Vicidial', 'Git', 'CI/CD', 'Endian', 'Nginx', 'Linux']
  },
  {
    id: 4,
    company: 'Clientify, España',
    position: 'DESARROLLADOR DE SOFTWARE FULL-STACK',
    period: 'Enero 2021 - Marzo 2021',
    description: `
      <ul>
        <li><strong>Desarrollo Backend y Optimización:</strong> Diseñé e implementé lógica de negocio robusta utilizando Python (2.7) y Django, asegurando la estabilidad y el rendimiento de servicios críticos del backend.</li>
        <li><strong>Procesamiento Asíncrono y Caché:</strong> Trabajé en la optimización de flujos de datos y tareas en segundo plano mediante la integración de RabbitMQ para la gestión de colas de mensajería y Redis para el manejo de caché y rendimiento del sistema.</li>
        <li><strong>Desarrollo Frontend e Interfaz:</strong> Creé y mejoré funcionalidades en la capa del cliente utilizando JavaScript, conectando de forma fluida el frontend con las API del backend.</li>
        <li><strong>Entorno de Operaciones:</strong> Desplegué y gestioné servicios en entornos Linux, manteniendo un flujo de trabajo organizado y colaborativo mediante el control de versiones con Git.</li>
      </ul>
    `,
    technologies: [ 'Mysql', 'Python', 'API REST', 'Django', 'JavaScript', 'jQuery' ,'Git', 'CI/CD', 'Linux']
  },
  {
    id: 5,
    company: 'Woonder Moon Inc, Panama',
    position: 'DESARROLLADOR DE SOFTWARE FULL-STACK',
    period: 'Enero 2017 - Marzo 2017',
    description: `
      <ul>
        <li><strong>Desarrollo Backend y APIs:</strong> Diseñé e implementé servicios del lado del servidor y APIs RESTful utilizando Node.js y Express, garantizando un intercambio de datos rápido y seguro.</li>
        <li><strong>Modelado de Datos:</strong> Diseñé, estructuré y optimicé tablas y consultas en bases de datos relacionales MySQL, asegurando la consistencia y la integridad de la información del negocio.</li>
        <li><strong>Desarrollo de Interfaz Dinámica:</strong> Construí componentes de la interfaz de usuario y gestioné el estado de la aplicación en el frontend utilizando Angular (versión 4) y JavaScript moderno.</li>
        <li><strong>Despliegue y Control:</strong> Administré el entorno de desarrollo sobre plataformas Linux y aseguré la trazabilidad del código utilizando Git para el control de versiones en equipo.</li>
      </ul>
    `,
    technologies: ['JavaScript', 'Angular', 'Node.js', 'Express', 'Mysql', 'API REST', 'Git', 'CI/CD', 'Nginx', 'Linux']
  },
  {
    id: 6,
    company: 'GMT PRIME CORP, España',
    position: 'DESARROLLADOR DE SOFTWARE FULL-STACK',
    period: 'Junio 2017 - Julio 2018',
    description: `
      <ul>
        <li><strong>Desarrollo Backend y Lógica de Negocio:</strong> Diseñé, mantuve y optimicé aplicaciones web robustas en el lado del servidor utilizando Python (2.7) y Django, asegurando un rendimiento eficiente.</li>
        <li><strong>Construcción de Interfaces Modernas:</strong> Creé componentes dinámicos, interactivos y reutilizables en el frontend utilizando React.js y JavaScript, mejorando la experiencia de usuario y el rendimiento en el navegador.</li>
        <li><strong>Integración de Capas (APIs):</strong> Conecté de manera fluida los servicios e infraestructura del backend con la interfaz de React, asegurando una comunicación eficiente de datos.</li>
        <li><strong>Entorno de Trabajo y Despliegue:</strong> Gestioné el ciclo de vida del desarrollo sobre sistemas operativos Linux y coordiné el trabajo colaborativo mediante el control de versiones con Git.</li>
      </ul>`,
    technologies: ['React', 'JavaScript', 'Python', 'Django',  'API REST', 'Git', 'CI/CD', 'Bitbucket', 'Nginx', 'Linux']
  },
  {
    id: 7,
    company: 'Techmnh, India',
    position: 'DESARROLLADOR FRONTEND',
    period: 'Enero 2017 - Marzo 2017',
    description: `
      <ul>
        <li><strong>Desarrollo de Interfaces Dinámicas:</strong> Diseñé e implementé componentes interactivos y reutilizables en el lado del cliente utilizando React.js y JavaScript moderno.</li>
        <li><strong>Integración con el Servidor:</strong> Colaboré en la integración del frontend con servicios y APIs del lado del servidor construidos sobre Express.js, asegurando un flujo de datos eficiente.</li>
        <li><strong>Optimización y Entorno:</strong> Gestioné el entorno de desarrollo y la ejecución de tareas sobre plataformas Linux, manteniendo buenas prácticas de desarrollo de software.</li>
        <li><strong>Control de Versiones:</strong> Trabajé de forma coordinada con el equipo técnico utilizando Git para la gestión del código fuente y el control de versiones.</li>
      </ul>
    `,
    technologies: ['React', 'JavaScript', 'Git', 'GitHub', 'Linux']
  },
  {
    id: 8,
    company: 'Empresa Socialista de Capital Mixto Guardian del Alba S.A, Venezuela.',
    position: 'Analista y Arquitecto de Software / Desarrollador Full-Stack',
    period: 'Octubre 2012 - Febrero 2018',
    description: `
      <ul>
        <li><strong>Arquitectura y Modelado de Software:</strong> Responsable del diseño arquitectónico de sistemas y modelado de procesos utilizando Visual Paradigm (UML), definiendo estructuras de software escalables y eficientes.</li>
        <li><strong>Desarrollo Enterprise (ERP):</strong> Implementación, personalización y desarrollo de módulos de negocio sobre la plataforma empresarial Odoo (v8) utilizando Python, adaptando el sistema a requerimientos corporativos complejos.</li>
        <li><strong>Desarrollo Backend y Frameworks:</strong> Diseñé y mantuve aplicaciones web robustas utilizando PHP (CodeIgniter) y Python, asegurando la estabilidad de los servicios del lado del servidor.</li>
        <li><strong>Frontend y UI Empresarial:</strong> Construí interfaces de usuario avanzadas y aplicaciones enriquecidas utilizando JavaScript, el framework Qooxdoo y XML para el intercambio estructurado de datos.</li>
        <li><strong>DevOps y Flujo de Trabajo:</strong> Gestión de repositorios, integración y control de versiones a gran escala utilizando Git y GitLab, desplegando soluciones sobre servidores Linux.</li>
      </ul>
    `,
    technologies: ['Visual parading,', 'Python', 'Odoo 8', 'PHP', 'Laravel', 'JavaScript', 'Qooxdoo', 'Jquery', 'Codeigniter', 'Symphony', 'Mysql', 'Docker', 'API REST', 'Ssh', 
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