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
import armadillo from '../images/portafolios/armadillo.png';
import gascomunal from '../images/portafolios/gas-comunal.png';
import guardianct from '../images/portafolios/guardian-ct.png';
import gda from '../images/portafolios/guardian-de-abastecimiento.png';
import nomina from '../images/portafolios/nomina.png';
import scia from '../images/portafolios/scia.png';
import sisconguard from '../images/portafolios/sisconguard.png';
import sisplanerp from '../images/portafolios/sisplan-erp.png';


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
    title: 'Sistema operacional - Armadillo',
    description: 'Desarrollo full-stack de un sistema web integral diseñado para el control, inventario y seguimiento de materiales en ubicaciones geográficas de difícil acceso y conectividad limitada. El sistema optimiza la logística de recursos críticos garantizando la persistencia de datos y un rendimiento ligero.',
    technologies: ['Php', 'Codeigniter', 'Html', 'Css', 'Bootstrap', 'JavaScript', 'Jquery', 'PostgreSQL', 'Nginx', 'Git'],
    image: armadillo,
    github: 'https://github.com/janedoe/ecommerce-platform',
    live: 'https://ecommerce.janedoe.com'
  },
  {
    id: 2,
    title: 'Gas Comunal',
    description: 'Plataforma web orientada a la gestión pública y comunitaria, diseñada para el censo, registro de usuarios y la distribución inteligente de gas doméstico. El sistema automatiza los criterios de asignación para garantizar un suministro equitativo, transparente y eficiente, reduciendo los tiempos de espera y los cuellos de botella logísticos.',
    technologies: ['Php', 'Codeigniter', 'Html', 'Css', 'Bootstrap', 'JavaScript', 'Jquery', 'PostgreSQL', 'Nginx', 'Git'],
    image: gascomunal,
    github: 'https://github.com/janedoe/task-manager',
    live: 'https://kanban.janedoe.com'
  },
  {
    id: 3,
    title: 'Guardian CT',
    description: 'Plataforma web de control logístico diseñada para el seguimiento y monitoreo de materiales de construcción a lo largo de rutas del territorio nacional. El sistema registra el paso de la carga por puntos de control estratégicos, permitiendo auditar los tiempos de traslado, mitigar riesgos de desvío y asegurar la transparencia en la cadena de suministro.',
    technologies: ['Php', 'Codeigniter', 'Html', 'Css', 'Bootstrap', 'JavaScript', 'Jquery', 'PostgreSQL', 'Nginx', 'Git'],
    image: guardianct,
    github: 'https://github.com/janedoe/realtime-dashboard',
    live: null // Sin demo en vivo por ahora
  },
  {
    id: 4,
    title: 'Guardian de abastecimiento',
    description: 'Sistema web a gran escala diseñado para monitorear, gestionar y garantizar la distribución equitativa de productos de primera necesidad a los ciudadanos en todo el territorio nacional. La plataforma cruza datos de inventario, demografía y demanda regional para optimizar el despacho y mitigar las alertas de desabastecimiento.',
    technologies: ['Php', 'Codeigniter', 'Html', 'Css', 'Bootstrap', 'JavaScript', 'Jquery', 'PostgreSQL', 'Nginx', 'Git'],
    image: gda,
    github: 'https://github.com/janedoe/realtime-dashboard',
    live: null // Sin demo en vivo por ahora
  },
  {
    id: 5,
    title: 'Nomina GA',
    description: 'Plataforma web empresarial desarrollada para automatizar la administración del personal, el control de incidencias y el procesamiento de la nómina de la empresa Guardián del Alba. El sistema centraliza los expedientes de los empleados, calcula asignaciones y deducciones, y gestiona el histórico de amonestaciones y reportes de pago.',
    technologies: ['Php', 'Codeigniter', 'Html', 'Css', 'Bootstrap', 'JavaScript', 'Jquery', 'PostgreSQL', 'Nginx', 'Svn','Git'],
    image: nomina,
    github: 'https://github.com/janedoe/realtime-dashboard',
    live: null // Sin demo en vivo por ahora
  },
  {
    id: 6,
    title: 'Sistema de confiabilidad de activos - Scia',
    description: 'Plataforma analítica avanzada desarrollada para la industria petrolera de Venezuela, enfocada en la gestión de activos e ingeniería de confiabilidad. El sistema incluye módulos especializados de optimización costo-riesgo para inventarios, permitiendo predecir fallas, calcular ciclos de vida de equipos críticos y balancear los costos de almacenamiento frente al riesgo financiero de paradas operativas.',
    technologies: ['Python', 'Qooxdoo', 'JavaScript', 'PostgreSQL', 'Chart.js', 'Svn', 'Git'],
    image: scia,
    github: 'https://github.com/janedoe/realtime-dashboard',
    live: null // Sin demo en vivo por ahora
  },
  {
    id: 7,
    title: 'Sistema de control de entradas y salidas de personal - sisconguard',
    description: 'Plataforma web de seguridad operativa diseñada para el registro, monitoreo y auditoría de las entradas y salidas del personal en tiempo real. El sistema centraliza los flujos de acceso, genera alertas ante anomalías horarias y automatiza el cálculo de horas laboradas, sirviendo como fuente de datos fiable para la gestión de asistencia.',
    technologies: ['Php', 'Codeigniter', 'Html', 'Css', 'Bootstrap', 'JavaScript', 'Jquery', 'PostgreSQL', 'Nginx', 'Git'],
    image: sisconguard,
    github: 'https://github.com/janedoe/realtime-dashboard',
    live: null // Sin demo en vivo por ahora
  },
  {
    id: 8,
    title: 'Sistema de Planificación de Recursos Empresariales (sisplan-ERP)',
    description: 'Desarrollo e implementación de un sistema ERP basado en Odoo para la gestión integral de procesos de negocio. El proyecto incluyó el desarrollo de módulos clave como control de inventarios (stocks), auditorías operativas, nómina empresarial y la localización contable y fiscal adaptada específicamente a las normativas legales de Venezuela (retenciones, impuestos y reportes fiscales oficiales)',
    technologies: ['Odoo 8', 'Python', 'JavaScript', 'Xml', 'PostgreSQL', 'Docker', 'Nginx', 'Git'],
    image: sisplanerp,
    github: 'https://github.com/janedoe/realtime-dashboard',
    live: null // Sin demo en vivo por ahora
  }
];

export const otherProjects = [
  {
    id: 1,
    title: 'Telegram Business Bot – Asistente de Notificaciones Operativas',
    description: 'Desarrollo de un bot automatizado para Telegram integrado con el backend del sistema, diseñado para enviar reportes operativos y financieros en tiempo real a los canales administrativos de la empresa. El bot notifica de manera proactiva el resumen de ventas diarias, alertas de bajas de usuarios o inventario, el estatus de procesos del sistema y la confirmación de correos electrónicos enviados masivamente.',
    technologies: ['Php', 'Laravel', 'Telegram Bot API', 'Git'],
    github: 'https://github.com/janedoe/vue-cli-gen',
  },
  {
    id: 2,
    title: 'Bot de Telegram para Gestión de Eventos',
    description: 'Bot programado en Python para organizar y recordar eventos en grupos de Telegram, con integración de calendarios.',
    technologies: ['Python', 'python-telegram-bot', 'Telegram Bot API', 'SQLite'],
    github: 'https://github.com/janedoe/telegram-event-bot',
  },
  {
    id: 3,
    title: 'Vicidial Audio Sync – Script de Automatización de Infraestructura Linux',
    description: 'Desarrollo de una solución de automatización en entorno de servidores para la migración, respaldo e intercambio masivo de grabaciones de audio entre múltiples servidores de telefonía Vicidial. El script optimiza el espacio en disco de los servidores de producción enviando las grabaciones de forma segura a servidores de almacenamiento centralizado o de respaldo, manteniendo la integridad de los datos.',
    technologies: ['Shell Script (Bash)', 'Linux (CentOS)', 'Rsync', 'SSH/SCP', 'Crontab'],
    github: 'https://github.com/janedoe/productivity-extension',
  },
  {
    id: 4,
    title: 'DB Backup Automatization – Script de Respaldo y Seguridad de Datos',
    description: 'Solución automatizada a nivel de infraestructura para la creación, empaquetado y rotación de respaldos diarios de las bases de datos de todos los sistemas críticos de la empresa. El script garantiza la disponibilidad de copias de seguridad actualizadas, optimiza el espacio de almacenamiento mediante políticas de retención y asegura que los datos estén listos para una restauración rápida en caso de contingencia.',
    technologies: ['Shell Script (Bash)', 'Linux (CentOS)', 'Rsync', 'SSH/SCP', 'MySql', 'Crontab'],
    github: 'https://github.com/janedoe/productivity-extension',
  },
  {
    id: 5,
    title: 'BI Report Mailer – Sistema Automatizado de Reportes Ejecutivos',
    description: 'Plataforma web y servicio automatizado desarrollado en Laravel diseñado para unificar, procesar y distribuir reportes diarios de rendimiento hacia las áreas de Gerencia, Contabilidad y Ventas. El sistema extrae métricas en tiempo real de los servidores Vicidial (llamadas diarias, tiempos de atención, estatus de ventas) y las cruza con la cartera de clientes de la empresa, despachando informes consolidados directamente a los correos electrónicos de los tomadores de decisiones.',
    technologies: ['Laravel', 'PHP','MySQL', 'Mail Services (SMTP)', 'HTML/CSS (Email Templates)','Git', 'Linux (CentOS)'],
    github: 'https://github.com/janedoe/productivity-extension',
  },
  {
    id: 6,
    title: 'Core-Billing – Sistema Automatizado de Procesamiento de Cobros TDC',
    description: 'Solución web desarrollada en Laravel para la automatización del proceso mensual de facturación y cobro recurrente a clientes abonados a través de Tarjetas de Crédito (Visa y Mastercard). El sistema unifica la cartera de clientes, calcula los montos correspondientes y genera de forma masiva los archivos de conciliación bancaria bajo los estándares requeridos por los procesadores de pago, garantizando la seguridad y precisión de las transacciones.',
    technologies: ['Laravel', 'PHP', 'Ssh', 'Vuejs', 'JavaScript', 'MySQL', 'Mail Services (SMTP)', 'HTML/CSS (Email Templates)','Git', 'Linux (CentOS)'],
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