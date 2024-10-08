<script setup>
import { ref, onMounted } from "vue";

const articulos = ref([]);

const fetchArticulos = async () => {
  try {
    const response = await fetch(
      "http://localhost:8080/api/v1/articulos/tecnica"
    );
    if (!response.ok) {
      throw new Error("Error al obtener los artículos");
    }
    const data = await response.json();
    articulos.value = data;
  } catch (error) {
    console.error(error);
  }
};

const getImageSrc = (imagen) => {
  if (imagen) {
    return `http://localhost:8080/upload/${imagen}`;
  }
  return "../assets/img/tecnica/tecnica1.jpg";
};

const formatDate = (fechaArray) => {
  if (Array.isArray(fechaArray) && fechaArray.length === 3) {
    const [year, month, day] = fechaArray;
    return `${day}/${month}/${year}`;
  }
  return "";
};

onMounted(fetchArticulos);
</script>

<template>
  <main>
    <RouterLink
      v-for="articulo in articulos"
      :key="articulo.id"
      :to="{ name: 'cuerpoArticulo', params: { id: articulo.id } }"
    >
      <div class="containerArticulo">
        <div class="imageWrapper">
          <img
            class="imgTecnica"
            :src="getImageSrc(articulo.imagen1)"
            alt="Imagen técnica"
          />
          <div class="overlay">
            <p class="titulo">{{ articulo.titulo }}</p>
            <p class="autor-fecha">
              {{ articulo.autor }} - {{ formatDate(articulo.fecha) }}
            </p>
          </div>
        </div>
      </div>
    </RouterLink>
  </main>
</template>

<style scoped>
main {
  display: grid;
  gap: 10px;
  align-items: start;
  grid-template-columns: repeat(3, 1fr);
}

.containerArticulo {
  padding: 5px;
  width: 100%;
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
  height: 298px;
  width: 100%;
  object-fit: cover;
  opacity: 0.8;
  filter: grayscale(30%);
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
  height: 40px;
  opacity: 1;
  transition: height 1s ease, bottom 0.5s ease;
}

.imageWrapper:hover .overlay {
  height: 80px;
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
}

.autor-fecha {
  margin: 0;
  font-size: 1.5rem;
  opacity: 0;
  transition: opacity 0.3s ease;
  color: var(--secondary-color);
}

.imageWrapper:hover .autor-fecha {
  opacity: 1;
}
@media (min-width: 481px) and (max-width: 1024px) {
  main {
    grid-template-columns: 1fr 1fr;
    min-height: 800px;
  }
}

@media (max-width: 480px) {
  main {
    grid-template-columns: 1fr;
  }
  .containerArticulo {
    padding: 20px;
  }
  .titulo {
    font-size: 10px;
  }
}

@media (min-width: 1025px) {
  main {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
