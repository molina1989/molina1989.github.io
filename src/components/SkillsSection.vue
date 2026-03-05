<template>
  <section id="skills" class="skills-section">
    <div class="container">
      <h2 class="section-title">Mis Habilidades</h2>
      <div class="skills-grid">
<!--         <div class="skill-category">
          <h3>Lenguajes de Programación</h3>
          <div class="skill-items">
            <img src="../assets/img/php-logo.svg" alt="PHP" class="tech-icon" title="PHP">
            <img src="../assets/img/python-logo.svg" alt="Python" class="tech-icon" title="Python">
            <img src="../assets/img/javascript-logo.svg" alt="JavaScript" class="tech-icon" title="JavaScript">
            </div>
        </div>

        <div class="skill-category">
          <h3>Frameworks & Librerías</h3>
          <div class="skill-items">
            <img src="../assets/img/laravel-logo.svg" alt="Laravel" class="tech-icon" title="Laravel">
            <img src="../assets/img/django-logo.svg" alt="Django" class="tech-icon" title="Django">
            <img src="../assets/img/vuejs-logo.svg" alt="Vue.js" class="tech-icon" title="Vue.js">
            <img src="../assets/img/react-logo.svg" alt="React" class="tech-icon" title="React">
            </div>
        </div>

        <div class="skill-category">
          <h3>Bases de Datos</h3>
          <div class="skill-items">
            <img src="../assets/img/mysql-logo.svg" alt="MySQL" class="tech-icon" title="MySQL">
            <img src="../assets/img/postgresql-logo.svg" alt="PostgreSQL" class="tech-icon" title="PostgreSQL">
            <img src="../assets/img/mongodb-logo.svg" alt="MongoDB" class="tech-icon" title="MongoDB">
            </div>
        </div>

        <div class="skill-category">
          <h3>Herramientas & Cloud</h3>
          <div class="skill-items">
            <img src="../assets/img/git-logo.svg" alt="Git" class="tech-icon" title="Git">
            <img src="../assets/img/docker-logo.svg" alt="Docker" class="tech-icon" title="Docker">
            <img src="../assets/img/aws-logo.svg" alt="AWS" class="tech-icon" title="AWS">
            </div> 
        </div>-->
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SkillsSection'
};
</script>

<style scoped>
.skills-section {
  background-color: var(--background-light);
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 40px;
  margin-top: 50px;
}

.skill-category {
  background-color: var(--background-dark);
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.skill-category:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
}

.skill-category h3 {
  color: var(--primary-color);
  margin-bottom: 25px;
  font-size: 1.6em;
}

.skill-items {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
}

/* El estilo de .tech-icon está en main.css */
.tech-icon {
  width: 60px; /* Un poco más grandes aquí */
  height: 60px;
  filter: grayscale(80%) brightness(1.2); /* Sutil gris para que no destaque demasiado */
  transition: filter 0.3s ease, transform 0.3s ease;
}

.tech-icon:hover {
  filter: grayscale(0%) brightness(1.0); /* Color completo al hover */
  transform: scale(1.1);
}

@media (max-width: 768px) {
  .skills-grid {
    grid-template-columns: 1fr;
  }
}
</style>