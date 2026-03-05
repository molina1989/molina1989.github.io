<template>
  <div id="app-portfolio" :class="{ 'overflow-hidden': isLoading }">
    <AppLoader v-if="isLoading" /> 
    
    <div v-show="!isLoading" class="main-layout">
      <aside class="sidebar-left">
        <LayoutSidebar />
      </aside>

      <main class="content-right">
        <LayoutMain />
        </main>
    </div>
  </div>
</template>

<script>
import AppLoader from './components/AppLoader.vue';
import LayoutSidebar from './components/LayoutSidebar.vue';
import LayoutMain from './components/LayoutMain.vue';
// import AppFooter from './components/AppFooter.vue'; // Si tienes un footer global

export default {
  name: 'AppPortfolio', // Nombre multi-palabra
  components: {
    AppLoader,
    LayoutSidebar,
    LayoutMain,
    // AppFooter
  },
  data() {
    return {
      isLoading: true
    };
  },
  mounted() {
    // Simular tiempo de carga. En una app real, esperarías a que los datos estén listos.
    setTimeout(() => {
      this.isLoading = false;
    }, 3000); // 3 segundos de loader
  }
};
</script>

<style scoped>
/* Estilos para el layout general de dos columnas */
.main-layout {
  display: flex;
  min-height: 100vh;
}

.sidebar-left {
  position: fixed; /* Barra lateral fija */
  top: 0;
  left: 0;
  width: clamp(200px, 40vw, 500px); /* Ancho responsivo para la sidebar */
  height: 100vh;
  padding: 2.5rem 3rem;
  background-color: var(--clr-slate-900);
  border-right: 1px solid rgba(255, 255, 255, 0.05); /* Separador sutil */
  overflow-y: auto; /* Para scroll si el contenido es muy largo */
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* Empuja el footer hacia abajo */
}

.content-right {
  flex-grow: 1; /* Ocupa el espacio restante */
  margin-left: clamp(200px, 40vw, 500px); /* Misma anchura que la sidebar para empujar el contenido */
  padding: 2.5rem 0; /* Padding superior/inferior para el contenido */
  overflow-y: auto; /* Permite el scroll solo en esta sección */
  position: relative; /* Para posibles elementos posicionados */
}

/* Evita el scroll del cuerpo mientras el loader está activo */
.overflow-hidden {
  overflow: hidden;
}

/* Mobile responsiveness */
@media (max-width: 1024px) {
  .sidebar-left {
    position: relative; /* Ya no es fija, sino parte del flujo */
    width: 100%; /* Ocupa todo el ancho */
    height: auto;
    padding: 2rem 1.5rem;
    border-right: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    z-index: 10; /* Para que esté por encima del contenido si hay superposiciones */
  }

  .content-right {
    margin-left: 0; /* Elimina el margen para la sidebar */
    padding: 2rem 0;
  }

  .main-layout {
    flex-direction: column; /* Apila las secciones verticalmente */
  }
}
</style>