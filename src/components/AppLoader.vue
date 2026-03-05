<template>
  <div class="loader-overlay">
    <div class="loader-content">
      <span class="loader-letter">M</span>
      <span class="loader-letter">O</span>
      <span class="loader-letter">L</span>
      <span class="loader-letter">I</span>
      <span class="loader-letter">N</span>
      <span class="loader-letter">A</span>
      <span class="loader-letter"> - </span>
      <span class="loader-letter">D</span>
      <span class="loader-letter">E</span>
      <span class="loader-letter">V</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppLoader' // Usamos un nombre multi-palabra
};
</script>

<style scoped>
/* 1. Capa de Fondo para Bloquear la Página */
.loader-overlay {
  position: fixed; /* Fijo para cubrir toda la ventana */
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--background-dark); /* Fondo oscuro del portafolio */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999; /* Asegura que esté por encima de todo */
  transition: opacity 0.5s ease;
}

/* 2. Contenedor del Texto */
.loader-content {
  font-size: 4em;
  font-weight: 700;
  color: var(--text-light);
}

/* 3. Estilo y Animación de las Letras */
.loader-letter {
  display: inline-block;
  opacity: 0; /* Empieza invisible */
  animation: bounce 1.5s infinite ease-in-out both; /* Animación de rebote */
  margin: 0 5px;
  color: var(--primary-color); /* Color de acento para las letras */
}

/* Retrasos para el efecto secuencial M-Dev */
.loader-letter:nth-child(1) { animation-delay: 0.1s; } /* M */
.loader-letter:nth-child(2) { animation-delay: 0.3s; } /* O */
.loader-letter:nth-child(3) { animation-delay: 0.5s; } /* L */
.loader-letter:nth-child(4) { animation-delay: 0.7s; } /* I */
.loader-letter:nth-child(5) { animation-delay: 0.9s; } /* N */
.loader-letter:nth-child(6) { animation-delay: 0.1s; } /* A */
.loader-letter:nth-child(7) { animation-delay: 0.3s; } /* - */
.loader-letter:nth-child(8) { animation-delay: 0.5s; } /* D */
.loader-letter:nth-child(9) { animation-delay: 0.7s; } /* E */
.loader-letter:nth-child(10) { animation-delay: 0.9s; } /* V */


/* Definición de la Animación de Rebote y Opacidad */
@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
    opacity: 1;
  }
  50% {
    transform: translateY(-20px);
    opacity: 0.7;
  }
}

/* Animación de Salida (Opcional: puedes añadir un fade out si es necesario) */
.fade-out {
  opacity: 0 !important;
  pointer-events: none; /* Deshabilita la interacción después del fade */
}
</style>