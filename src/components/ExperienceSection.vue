<template>
  <section id="experience" class="experience-section">
    <h2 class="section-title">Experiencia</h2>
    <div class="experience-list">
      <div v-for="job in experience" :key="job.id" class="job-card">
        <div class="job-header">
          <h3>{{ job.position }}</h3>
          <span class="job-period">{{ job.period }}</span>
        </div>
        <p class="job-company">{{ job.company }}</p>
        <div class="job-description" v-html="job.description"></div>
        <div class="job-tech-stack">
          <span v-for="tech in job.technologies" :key="tech" class="tech-tag">{{ tech }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { experience } from '../assets/data/portfolioData.js';

export default {
  name: 'ExperienceSection',
  data() {
    return {
      experience: experience
    };
  }
};
</script>

<style scoped>
.experience-section {
  /* Estilos específicos para la sección Experiencia */
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

.experience-list {
  display: flex;
  flex-direction: column;
  gap: 2.5rem; /* Espacio entre las tarjetas de trabajo */
}

.job-card {
  background-color: var(--clr-slate-800); /* Fondo ligeramente más claro que el body */
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-align: left;
}

.job-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
}

.job-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 0.5rem;
}

.job-card h3 {
  font-size: 1.25rem;
  color: var(--clr-slate-200);
  margin-bottom: 0;
}

.job-period {
  font-size: 0.85rem;
  color: var(--clr-slate-500);
  font-family: var(--font-mono);
  white-space: nowrap; /* Evita que la fecha se rompa */
}

.job-company {
  font-size: 1rem;
  color: var(--clr-green);
  margin-bottom: 1rem;
  font-weight: 500;
}

.job-description {
  font-size: 0.95rem;
  color: var(--clr-slate-400);
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.job-description >>> br {
    display: block;
    content: "";
    margin-top: 0.75em;
}

.job-description >>> ul {
    list-style: disc; /* Vuelven las viñetas */
    margin-left: 1.5em;
    padding-left: 0;
}

.job-description >>> li {
    margin-bottom: 0.5em;
}


.job-tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 1rem;
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

/* Responsive */
@media (max-width: 768px) {
  .job-header {
    flex-direction: column;
    align-items: flex-start;
  }
  .job-period {
    margin-top: 0.25rem;
  }
}
</style>