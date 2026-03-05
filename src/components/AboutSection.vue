<template>
  <section id="about" class="about-section">
    <h2 class="section-title">Sobre Mí</h2>
    <div class="content-text" v-html="aboutContent"></div>

    <h3 class="mt-4">Mis Habilidades Clave</h3>
    <div class="skills-grid">
      <div v-for="skillCategory in skills" :key="skillCategory.category" class="skill-category-card">
        <h4>{{ skillCategory.category }}</h4>
        <div class="skill-items">
          <div v-for="skill in skillCategory.items" :key="skill.name" class="skill-item">
           <!--  <img :src="skill.icon" :alt="skill.name" class="tech-icon"> -->
            <font-awesome-icon :icon="skill.icon" class="tech-icon" />
            <span class="tech-name">{{ skill.name }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { aboutContent, skills } from '../assets/data/portfolioData.js';

export default {
  name: 'AboutSection',
  data() {
    return {
      aboutContent: aboutContent,
      skills: skills
    };
  }
};
</script>

<style scoped>
.about-section {
  /* Estilos específicos para la sección Sobre Mí */
}

.section-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--clr-slate-200);
  margin-bottom: 1.5rem;
  position: relative;
  text-align: left; /* Alineado a la izquierda */
  padding-left: 0;
}

/* Subrayado con color de acento */
.section-title::after {
  content: '';
  display: block;
  width: 3rem; /* Longitud del subrayado */
  height: 2px;
  background-color: var(--clr-green);
  margin-top: 0.5rem;
  margin-left: 0; /* Asegura que esté a la izquierda */
}


.content-text {
  font-size: 1rem;
  color: var(--clr-slate-400);
  line-height: 1.7;
  text-align: justify;
}

.content-text >>> p { /* Target paragraphs inside v-html */
  margin-bottom: 1em;
}

.content-text >>> br { /* Asegura que los <br> añadan espacio */
    display: block;
    content: "";
    margin-top: 0.5em; /* Espacio extra para los saltos de línea */
}

.mt-4 { /* Un simple margen top, puedes hacer una clase de utilidad */
  margin-top: 2rem;
  text-align: left;
  font-size: 1.25rem;
  color: var(--clr-slate-300);
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.skill-category-card {
  background-color: var(--clr-slate-800);
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  text-align: left;
}

.skill-category-card h4 {
  color: var(--clr-green);
  font-size: 1.1rem;
  margin-bottom: 1rem;
}

.skill-items {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.skill-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background-color: var(--clr-slate-700);
  padding: 0.5rem 0.75rem;
  border-radius: 5px;
  color: var(--clr-slate-200);
  font-size: 0.9rem;
  font-family: var(--font-mono); /* Un toque mono para las tecnologías */
}

.tech-icon {
  width: 20px;
  height: 20px;
  filter: grayscale(100%); /* Iconos en blanco y negro */
  opacity: 0.7;
  transition: filter 0.3s ease, opacity 0.3s ease;
}

.skill-item:hover .tech-icon {
  filter: grayscale(0%); /* Color al pasar el ratón */
  opacity: 1;
}

.tech-name {
  white-space: nowrap; /* Evita que el nombre se rompa */
}
</style>