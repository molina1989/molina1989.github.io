<template>
  <section id="other-projects" class="other-projects-section">
    <h2 class="section-title">Otros Proyectos</h2>
    <p class="section-description">
      Una selección de proyectos más pequeños, herramientas y contribuciones que he realizado.
    </p>

    <div class="other-projects-grid">
      <div v-for="project in otherProjects" :key="project.id" class="other-project-card">
        <div class="card-header">
          <i class="fas fa-folder other-project-icon"></i>
          <a v-if="project.github" :href="project.github" target="_blank" class="github-link" aria-label="Ver Código en GitHub">
            <i class="fab fa-github"></i>
          </a>
        </div>
        <h3>{{ project.title }}</h3>
        <p>{{ project.description }}</p>
        <div class="project-tech-stack">
          <span v-for="tech in project.technologies" :key="tech" class="tech-tag">{{ tech }}</span>
        </div>
      </div>
    </div>

    <div class="text-center mt-5">
      <a href="https://github.com/janedoe?tab=repositories" target="_blank" class="btn-primary-styled">Ver más en GitHub <i class="fas fa-arrow-right"></i></a>
    </div>
  </section>
</template>

<script>
import { otherProjects } from '../assets/data/portfolioData.js';

export default {
  name: 'OtherProjectsSection',
  data() {
    return {
      otherProjects: otherProjects
    };
  }
};
</script>

<style scoped>
.other-projects-section {
  /* Estilos específicos */
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

.section-description {
    font-size: 1rem;
    color: var(--clr-slate-400);
    margin-bottom: 2.5rem;
    text-align: left;
}

.other-projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}

.other-project-card {
  background-color: var(--clr-slate-800);
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, background-color 0.3s ease;
  display: flex;
  flex-direction: column;
  text-align: left;
}

.other-project-card:hover {
  transform: translateY(-5px);
  background-color: var(--clr-slate-700); /* Ligeramente más claro al hover */
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.other-project-icon {
  font-size: 2rem;
  color: var(--clr-green);
}

.github-link {
  font-size: 1.2rem;
  color: var(--clr-slate-400);
  transition: color 0.3s ease;
}

.github-link:hover {
  color: var(--clr-green);
}

.other-project-card h3 {
  font-size: 1.15rem;
  color: var(--clr-slate-200);
  margin-bottom: 0.75rem;
}

.other-project-card p {
  font-size: 0.9rem;
  color: var(--clr-slate-400);
  line-height: 1.5;
  margin-bottom: 1.5rem;
  flex-grow: 1; /* Empuja las tecnologías hacia abajo */
}

.project-tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: auto;
}

.tech-tag {
  background-color: var(--clr-slate-700);
  color: var(--clr-green);
  padding: 0.3rem 0.6rem;
  border-radius: 4px;
  font-size: 0.75rem;
  font-family: var(--font-mono);
  white-space: nowrap;
}

.text-center {
  text-align: center;
}

.mt-5 {
  margin-top: 3rem;
}

.btn-primary-styled {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background-color: transparent;
  border: 1px solid var(--clr-green);
  color: var(--clr-green);
  padding: 0.75rem 1.5rem;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: 600;
  transition: background-color 0.3s ease, color 0.3s ease, transform 0.3s ease;
}

.btn-primary-styled:hover {
  background-color: var(--clr-green);
  color: var(--clr-slate-900);
  transform: translateY(-2px);
}
</style>