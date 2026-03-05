<template>
  <header class="main-header">
    <div class="container header-content">
      <div class="logo">
        <a href="#hero">Jane Doe</a>
      </div>
      <nav class="main-nav">
        <ul>
          <li><a href="#hero">Inicio</a></li>
          <li><a href="#about">Sobre Mí</a></li>
          <li><a href="#skills">Habilidades</a></li>
          <li><a href="#projects">Proyectos</a></li>
          <li><a href="#experience">Experiencia</a></li>
          <li><a href="#contact">Contacto</a></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HeaderSection'
};
</script>

<style scoped>
.main-header {
  background-color: var(--background-light);
  padding: 15px 0;
  border-bottom: 1px solid var(--border-color);
  position: sticky;
  top: 0;
  z-index: 1000;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo a {
  font-size: 1.8em;
  font-weight: bold;
  color: var(--primary-color);
}

.main-nav ul {
  list-style: none;
  display: flex;
}

.main-nav li {
  margin-left: 30px;
}

.main-nav a {
  color: var(--text-light);
  font-weight: 500;
  position: relative;
}

.main-nav a::after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  bottom: -5px;
  left: 0;
  background-color: var(--primary-color);
  transition: width 0.3s ease-in-out;
}

.main-nav a:hover::after,
.main-nav a.active::after { /* Puedes añadir una clase 'active' con Vue Router */
  width: 100%;
}

/* Media Queries para responsividad */
@media (max-width: 768px) {
  .header-content {
    flex-direction: column;
  }
  .main-nav ul {
    margin-top: 15px;
    flex-wrap: wrap;
    justify-content: center;
  }
  .main-nav li {
    margin: 5px 10px;
  }
}
</style>