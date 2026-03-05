<template>
  <div class="main-content-wrapper">
    <AboutSection id="about" />
    <ExperienceSection id="experience" />
    <ProjectsSection id="projects" />
    <OtherProjectsSection id="other-projects" />
    </div>
</template>

<script>
// Importa cada una de las secciones de contenido que crearemos
import AboutSection from './AboutSection.vue';
import ExperienceSection from './ExperienceSection.vue';
import ProjectsSection from './ProjectsSection.vue';
import OtherProjectsSection from './OtherProjectsSection.vue';
// import ContactSection from './ContactSection.vue'; // Si decides tener un componente de contacto

export default {
  name: 'LayoutMain', // Nombre multi-palabra
  components: {
    AboutSection,
    ExperienceSection,
    ProjectsSection,
    OtherProjectsSection, 
    // ContactSection
  }
};
</script>

<style scoped>
.main-content-wrapper {
  padding: 0 4rem; /* Un buen padding horizontal para el contenido */
  max-width: 900px; /* Limita el ancho del contenido para mejor legibilidad */
  margin: 0 auto; /* Centra el contenido dentro de la columna derecha */
}

/* Estilos para las secciones internas */
/* Puedes definir un padding base para todas las secciones aquí
   o directamente en cada componente de sección. */
section {
  padding-top: 5rem; /* Espacio superior entre secciones */
  padding-bottom: 3rem; /* Espacio inferior entre secciones */
  /* border-bottom: 1px solid rgba(255, 255, 255, 0.05);  Opcional: un separador entre secciones */
}

/* Eliminar el borde inferior de la última sección si lo usas */
/* section:last-of-type {
  border-bottom: none;
} */


/* Responsividad para móviles y pantallas pequeñas */
@media (max-width: 1024px) {
  .main-content-wrapper {
    padding: 0 1.5rem; /* Menos padding en pantallas pequeñas */
  }

  section {
    padding-top: 3rem;
    padding-bottom: 2rem;
  }
}
</style>