<template>
  <section id="hero" class="hero-section">
    <div class="container hero-content">
      <div class="hero-image">
        <img src="../assets/images/Logo.png" alt="Jane Doe" class="profile-pic">
      </div>
      <div class="hero-text">
        <h1>Hola, soy Jane Doe</h1>
        <p class="subtitle">Desarrolladora Full Stack | Especialista en PHP & Python</p>
        <div class="hero-ctas">
          <a href="#projects" class="btn btn-primary">Ver Proyectos</a>
          <a href="#" class="btn btn-secondary">Descargar CV</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HeroSection'
};
</script>

<style scoped>
.hero-section {
  background-color: var(--background-dark);
  padding: 120px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 80px); /* Ajusta con la altura del header */
  text-align: center; /* Alineación inicial, flexbox se encargará del resto */
  position: relative; /* Para el fondo de partículas o similar */
  overflow: hidden;
}

/* Opcional: Patrón de fondo sutil */
.hero-section::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%232a3447' fill-opacity='0.4'%3E%3Cpath d='M30 60c16.569 0 30-13.432 30-30S46.569 0 30 0 0 13.432 0 30s13.431 30 30 30zm0-10C18.954 50 10 41.046 10 30S18.954 10 30 10s20 8.954 20 20-8.954 20-20 20zM30 30h-5v5h5v-5z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    z-index: 1;
    opacity: 0.1;
}


.hero-content {
  display: flex;
  flex-direction: column; /* Por defecto vertical */
  align-items: center;
  gap: 40px;
  z-index: 2; /* Para que esté por encima del fondo */
}

.hero-image {
  border: 5px solid var(--primary-color);
  border-radius: 50%;
  overflow: hidden;
  width: 200px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 20px rgba(0, 123, 255, 0.4);
}

.profile-pic {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.hero-text h1 {
  font-size: 3.5em;
  margin-bottom: 10px;
  color: var(--text-light);
}

.hero-text .subtitle {
  font-size: 1.5em;
  color: var(--text-muted);
  margin-bottom: 30px;
}

.hero-ctas {
  display: flex;
  gap: 20px;
  justify-content: center;
}

/* Media Query para diseños de escritorio (invertir orden) */
@media (min-width: 992px) {
  .hero-content {
    flex-direction: row; /* Horizontal en escritorio */
    text-align: left;
    justify-content: center;
  }

  .hero-image {
    order: 2; /* Mueve la imagen a la derecha */
  }

  .hero-text {
    order: 1; /* Mueve el texto a la izquierda */
    margin-right: 60px; /* Espacio entre texto e imagen */
  }

  .hero-text h1 {
    font-size: 4.5em;
  }
  .hero-ctas {
    justify-content: flex-start;
  }
}

@media (max-width: 768px) {
  .hero-section {
    padding: 80px 0;
  }
  .hero-image {
    width: 150px;
    height: 150px;
  }
  .hero-text h1 {
    font-size: 2.8em;
  }
  .hero-text .subtitle {
    font-size: 1.2em;
  }
  .hero-ctas {
    flex-direction: column;
    gap: 15px;
  }
  .btn {
    width: 80%; /* Hacer los botones más anchos en móvil */
    margin: 0 auto;
  }
}
</style>