<template>
  <div class="sidebar-content">
    <div class="header-section">
      <h1 class="name">{{ personalInfo.name }}</h1>
      <p class="title">{{ personalInfo.title }}</p>
      <p class="specialty">{{ personalInfo.specialty }}</p>
      <div style="display:flex; justify-content:center;">
        <div class="profile-pic-container">
          <img :src="profilePicUrl" :alt="personalInfo.name" class="profile-pic"> 
        </div>
      </div>
    </div>

    <nav class="main-nav">
      <ul>
        <li><a href="#about" @click="scrollToSection('about')" :class="{ 'active': activeSection === 'about' }">Sobre Mí</a></li>
        <li><a href="#experience" @click="scrollToSection('experience')" :class="{ 'active': activeSection === 'experience' }">Experiencia</a></li>
        <li><a href="#projects" @click="scrollToSection('projects')" :class="{ 'active': activeSection === 'projects' }">Proyectos Destacados</a></li>
        <li><a href="#other-projects" @click="scrollToSection('other-projects')" :class="{ 'active': activeSection === 'other-projects' }">Otros Proyectos</a></li>
      </ul>
    </nav>

    <div class="footer-section">
      <a :href="'mailto:' + personalInfo.email" class="email-link" target="_blank" aria-label="Enviar correo electrónico">
        <font-awesome-icon :icon="['fas', 'envelope']" /> {{ personalInfo.email }}
      </a>
      
      <div class="social-links">
        <a v-for="link in personalInfo.socialLinks" :key="link.name" :href="link.url" target="_blank" :aria-label="link.name">
          <font-awesome-icon :icon="link.icon" />
        </a>
      </div>
      <div class="external-links">
        <a v-for="link in personalInfo.externalLinks" :key="link.name" :href="link.url" :target="link.url.startsWith('/') ? '_self' : '_blank'" :aria-label="link.name">
          <font-awesome-icon :icon="link.icon" /> {{ link.name }}
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { personalInfo } from '../assets/data/portfolioData.js'; // Importa los datos
// Importa FontAwesome para los iconos (si usas)
// import '@fortawesome/fontawesome-free/css/all.css';

export default {
  name: 'LayoutSidebar',
  data() {
    return {
      personalInfo: personalInfo,
      activeSection: 'about' // Sección activa para resaltar en la navegación
    };
  },
  computed: {
    profilePicUrl() {
      // Usar 'require' para Vue CLI, o importar directamente con Vite
      return new URL('../assets/images/perfil.png', import.meta.url).href;
    }
  },
  mounted() {
    window.addEventListener('scroll', this.onScroll);
    this.onScroll(); // Llama una vez para establecer la sección inicial
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.onScroll);
  },
  methods: {
    scrollToSection(id) {
      document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
      // Actualiza la sección activa inmediatamente al hacer clic
      this.activeSection = id;
    },
    onScroll() {
      const sections = ['about', 'experience', 'projects', 'other-projects']; // ID's de tus secciones principales
      let currentActive = this.activeSection;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const rect = section.getBoundingClientRect();
          // Define cuándo una sección está "activa" (e.g., su parte superior está visible)
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            currentActive = sections[i];
            break;
          }
        }
      }
      if (this.activeSection !== currentActive) {
        this.activeSection = currentActive;
      }
    }
  }
};
</script>

<style scoped>
.sidebar-content {
  display: flex;
  flex-direction: column;
  height: 100%; /* Para que el contenido interno ocupe el alto de la sidebar */
  justify-content: space-between;
}

.header-section {
  text-align: left;
  margin-bottom: 2rem;
}

.name {
  font-size: 3.0rem;
  font-weight: 800;
  color: var(--clr-slate-50);
  line-height: 1;
  margin-bottom: 0.5rem;
}

.title {
  font-size: 1.5rem;
  font-weight: 500;
  color: var(--clr-slate-200);
  margin-bottom: 0.5rem;
}

.specialty {
  font-size: 1rem;
  color: var(--clr-slate-400);
}

.profile-pic-container {
  //margin-top: 1rem;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  overflow: hidden;
  border: 3px solid var(--clr-green);
  box-shadow: 0 0 15px rgba(100, 255, 218, 0.2);
}

.profile-pic {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.main-nav ul {
  padding-left: 0; /* Elimina padding por defecto de UL */
}

.main-nav li {
  margin-bottom: 0.75rem;
}

.main-nav a {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.5rem 0;
  color: var(--clr-slate-400);
  font-weight: 500;
  font-size: 0.95rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  transition: color 0.3s ease;
}

.main-nav a::before { /* Animación de línea al estilo Brittany */
  /*content: '';*/
  display: block;
  width: 1rem;
  height: 1px;
  background-color: var(--clr-slate-600);
  transition: width 0.3s ease, background-color 0.3s ease;
}

.main-nav a:hover {
  color: var(--clr-slate-200);
}

.main-nav a:hover::before {
  width: 2.5rem;
  background-color: var(--clr-slate-200);
}

.main-nav a.active {
  color: var(--clr-green);
}

.main-nav a.active::before {
  width: 2.5rem;
  background-color: var(--clr-green);
}

.footer-section {
  margin-top: auto;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  display: flex; /* Para organizar los elementos del footer */
  flex-direction: column;
  align-items: center; /* Centra los elementos horizontalmente */
  gap: 0.5rem; /* Espacio entre los bloques del footer */
}
.social-links {
  display: flex;
  gap: 1.5rem;
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  justify-content: center; /* Centrar iconos */
}

.social-links a {
  color: var(--clr-slate-400);
  transition: color 0.3s ease;
}

.social-links a:hover {
  color: var(--clr-green);
  transform: translateY(-3px); /* Pequeño efecto */
}

.external-links {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  text-align: center;
}

.external-links a {
  color: var(--clr-slate-400);
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: color 0.3s ease;
}

.external-links a:hover {
  color: var(--clr-green);
}

/* --- NUEVOS ESTILOS PARA EL ENLACE DE CORREO --- */
.email-link {
  display: inline-flex; /* Permite icono y texto en la misma línea */
  align-items: center;
  gap: 0.75rem; /* Espacio entre el icono y el texto */
  color: var(--clr-slate-400); /* Color de texto por defecto */
  font-size: 0.95rem;
  font-weight: 500;
  padding: 0.5rem 0; /* Padding para hacer clic más fácil */
  transition: color 0.3s ease, transform 0.3s ease;
}

.email-link i {
  font-size: 1.2rem; /* Tamaño del icono */
  color: var(--clr-slate-500); /* Color del icono */
  transition: color 0.3s ease;
}

.email-link:hover {
  color: var(--clr-green); /* Color de texto al pasar el ratón */
  transform: translateY(-2px); /* Pequeño efecto de elevación */
}

.email-link:hover i {
  color: var(--clr-green); /* Color del icono al pasar el ratón */
}
</style>
