<template>
  <div class="loading-container">
        <div class="loading-text">Molina Dev</div>
    </div>
</template>

<script>
export default {
  name: 'AppLoader' // Usamos un nombre multi-palabra
};
</script>

<style scoped>
  /* Centrado total en la pantalla */
  .loading-container {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: var(--background-dark); /* Fondo oscuro del portafolio */
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 9999; /* Asegura que esté por encima de todo */
  }

  /* Contenedor del loading */
  .loading-container {
      text-align: center;
  }

  /* Texto con la animación de color */
  .loading-text {
      font-size: 3rem;
      font-weight: 800;
      letter-spacing: 2px;
      text-transform: uppercase;
      
      /* Creamos el gradiente: Oscuro sombreado -> Azul brillante -> Oscuro sombreado */
      background: linear-gradient(
          to right, 
          #2c3e50 0%, 
          #34495e 20%, 
          #00d2ff 50%, 
          #2c3e50 80%, 
          #2c3e50 100%
      );
      
      /* Hacemos que el fondo solo pinte el texto */
      background-size: 200% auto;
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
      
      /* Sombra sutil para dar profundidad */
      filter: drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.5));
      
      /* Animación infinita */
      animation: shine 2.5s linear infinite;
  }

  /* Animación del movimiento del fondo */
  @keyframes shine {
      0% {
          background-position: 200% center;
      }
      100% {
          background-position: 0% center;
      }
  }

</style>