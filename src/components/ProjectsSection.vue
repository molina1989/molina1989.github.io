<template>
  <section id="projects" class="projects-section">
    <h2 class="section-title">Proyectos Destacados</h2>
    <div class="projects-grid">
      <div v-for="project in featuredProjects" :key="project.id" class="project-card">
        <div class="project-image-container">
          <img :src="project.image" :alt="project.title" class="project-image">
          <div class="project-overlay">
            <a v-if="project.live" :href="project.live" target="_blank" class="overlay-link" aria-label="Ver Proyecto en Vivo">
              <i class="fas fa-external-link-alt"></i>
            </a>
            <a v-if="project.github" :href="project.github" target="_blank" class="overlay-link" aria-label="Ver Código en GitHub">
              <i class="fab fa-github"></i>
            </a>
          </div>
        </div>
        <div class="project-info">
          <h3>{{ project.title }}</h3>
          <p>{{ project.description }}</p>
          <div class="project-tech-stack">
            <span v-for="tech in project.technologies" :key="tech" class="tech-tag">{{ tech }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { featuredProjects } from '../assets/data/portfolioData.js';
// Asegúrate de tener Font Awesome instalado o referenciado globalmente

export default {
  name: 'ProjectsSection',
  data() {
    return {
      featuredProjects: featuredProjects
    };
  }
};
</script>

<style scoped>
.projects-section {
  /* Estilos específicos para la sección Proyectos */
}

.section-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--clr-slate-200);
  margin-bottom: 1.5rem;
  position: relative;
  text-align: left;
}

.section-title::after {
  content: '';
  display: block;
  width: 3rem;
  height: 2px;
  background-color: var(--clr-green);
  margin-top: 0.5rem;
  margin-left: 0;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2.5rem;
}

.project-card {
  background-color: var(--clr-slate-800);
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column; /* Para que la imagen y el info se apilen */
  text-align: left;
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
}

.project-image-container {
  position: relative;
  width: 100%;
  height: 200px; /* Altura fija para la imagen */
  overflow: hidden;
}

.project-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.project-card:hover .project-image {
  transform: scale(1.05); /* Zoom sutil en la imagen */
}

.project-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6); /* Oscurece la imagen */
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.project-card:hover .project-overlay {
  opacity: 1;
}

.overlay-link {
  color: var(--clr-green);
  font-size: 2rem;
  transition: color 0.3s ease, transform 0.3s ease;
}

.overlay-link:hover {
  color: var(--clr-slate-50);
  transform: scale(1.1);
}

.project-info {
  padding: 1.5rem;
  flex-grow: 1; /* Para que ocupe el espacio restante y empuje el footer */
  display: flex;
  flex-direction: column;
}

.project-info h3 {
  font-size: 1.25rem;
  color: var(--clr-slate-200);
  margin-bottom: 0.75rem;
}

.project-info p {
  font-size: 0.95rem;
  color: var(--clr-slate-400);
  line-height: 1.6;
  margin-bottom: 1.5rem;
  flex-grow: 1; /* Empuja las tecnologías hacia abajo */
}

.project-tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: auto; /* Empuja al final de la tarjeta */
}

.tech-tag {
  background-color: var(--clr-slate-700);
  color: var(--clr-green);
  padding: 0.4rem 0.8rem;
  border-radius: 4px;
  font-size: 0.8rem;
  font-family: var(--font-mono);
  white-space: nowrap;
}
</style>