<script setup>
import { ref, onMounted } from "vue";
</script>

<template>
  <main>
    <RouterLink to="/salas">
      <div class="containerArticulo">
        <div class="imageWrapper">
          <img
            class="imgTecnica"
            src="../../assets/img/home/salas.jpg"
            alt="Imagen técnica 1"
          />
          <div class="overlay">
            <p class="titulo">SALAS</p>
            <p class="autor-fecha">
              Tu próximo desafío está a una sala de distancia
            </p>
          </div>
        </div>
      </div>
    </RouterLink>
    <RouterLink to="/tecnica">
      <div class="containerArticulo">
        <div class="imageWrapper">
          <img
            class="imgTecnica"
            src="../../assets/img/home/tecnica.jpg"
            alt="Imagen técnica 1"
          />
          <div class="overlay">
            <p class="titulo">TECNICA</p>
            <p class="autor-fecha">
              Aprende los conceptos del padel para mejorar
            </p>
          </div>
        </div>
      </div>
    </RouterLink>
    <RouterLink to="/psicologia">
      <div class="containerArticulo">
        <div class="imageWrapper">
          <img
            class="imgTecnica"
            src="../../assets/img/home/psicologia.jpg"
            alt="Imagen técnica 1"
          />
          <div class="overlay">
            <p class="titulo">PSICOLOGIA</p>
            <p class="autor-fecha">Domina Tu Mente, Domina el Juego</p>
          </div>
        </div>
      </div>
    </RouterLink>
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: stretch;
}

.containerArticulo {
  width: 100%;
  padding: 5px;
}

.imageWrapper {
  position: relative;
  overflow: hidden;
  border-radius: 10px;
}

.imageWrapper:hover {
  box-shadow: 0 0 10px var(--primary-color);
}

.imgTecnica {
  height: 398px;
  width: 100%;
  object-fit: cover;
  opacity: 0.6;
  filter: grayscale(20%);
  transition: 1000ms;
}

.overlay {
  position: absolute;
  bottom: 0;
  background-color: var(--primary-color);
  color: white;
  width: 100%;
  text-align: center;
  padding: 10px 0;
  height: 80px;
  opacity: 1;
  transition: height 1s ease, bottom 0.5s ease;
}

.imageWrapper:hover .overlay {
  height: 150px;
  box-shadow: 0 0 10px var(--secondary-color);
}

.imgTecnica:hover {
  opacity: 1;
  filter: grayscale(0%);
  box-shadow: 0 0 20px var(--secondary-color);
  transform: scale(1.03);
}

.titulo {
  margin: 0;
  font-size: 40px;
  color: white;
}

.autor-fecha {
  margin: 0;
  font-size: 2rem;
  opacity: 0;
  transition: opacity 0.3s ease;
  color: var(--secondary-color);
}

.imageWrapper:hover .autor-fecha {
  opacity: 1;
}

@media (min-width: 481px) and (max-width: 1024px) {
  main {
    flex-direction: column;
  }
}

@media (max-width: 480px) {
  .imgTecnica {
    height: 200px;
  }
  .overlay {
    height: 40px;
  }
  .titulo {
    font-size: 15px;
  }
  .autor-fecha {
    font-size: 10px;
  }
  .imageWrapper:hover .overlay {
    height: 70px;
  }
}

@media (min-width: 1025px) {
  main {
    flex-direction: column;
  }
}
</style>
