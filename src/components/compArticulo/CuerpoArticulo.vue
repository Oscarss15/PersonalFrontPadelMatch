<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import BotonVolverArticulo from "./BotonVolverArticulo.vue";
import NavbarLogueado from "../Navbars/NavbarLogueado.vue";
import ColoresApp from "../esquemaColores/ColoresApp.vue";

const route = useRoute();
const articulo = ref(null);

const fetchArticulo = async () => {
  try {
    const response = await fetch(
      `http://localhost:8080/api/v1/articulos/${route.params.id}`
    );
    if (!response.ok) {
      throw new Error("Error al obtener el artículo");
    }
    articulo.value = await response.json();
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

const getBackLink = () => {
  return articulo.value?.tipo === "técnica" ? "/tecnica" : "/psicologia";
};

onMounted(fetchArticulo);
</script>
<template>
  <NavbarLogueado></NavbarLogueado>
  <main>
    <div id="space"></div>
    <div id="containerTitulo">
      <h1 class="titulo" v-if="articulo">{{ articulo.titulo }}</h1>
    </div>
    <div id="space"></div>

    <div id="containerArticulos" v-if="articulo">
      <div class="contArticulo">
        <div class="contTexto">
          <p id="bloqueTexto1">
            {{ articulo.texto1 }}
          </p>
        </div>
        <div class="contImagen">
          <img class="img1" :src="getImageSrc(articulo.imagen1)" alt="" />
        </div>
      </div>
      <div class="contSeparador">
        <div class="separador"></div>
      </div>
      <div class="contArticulo">
        <div class="contTextoInvertido">
          <p id="bloqueTexto2">
            {{ articulo.texto2 }}
          </p>
        </div>
        <div class="contImagenInvertido">
          <img class="img1" :src="getImageSrc(articulo.imagen2)" alt="" />
        </div>
      </div>
      <div class="contSeparador">
        <div class="separador"></div>
      </div>
      <div class="contArticulo">
        <div class="contTexto">
          <p id="bloqueTexto3">
            {{ articulo.texto3 }}
          </p>
        </div>
        <div class="contImagen">
          <img class="img1" :src="getImageSrc(articulo.imagen3)" alt="" />
        </div>
      </div>
    </div>
    <div class="separador"></div>

    <RouterLink class="routerlink" :to="getBackLink()">
      <BotonVolverArticulo />
    </RouterLink>
    <ColoresApp></ColoresApp>
  </main>
</template>
<style scoped>
main {
  min-height: 657px;
  background: url("../../assets/img/login/fondo.png") no-repeat center center;
  background-size: cover;
  object-fit: cover;
  background-attachment: fixed;
}
.routerlink {
  text-decoration: none;
}

#containerArticulos {
  display: grid;
  grid-template-columns: auto;
  width: 100%;
}
#containerTitulo {
  height: 100px;
  background-color: var(--primary-color);
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 60px;
  color: var(--secondary-color);
}

#space {
  width: 100%;
  height: 10px;
  background-color: white;
}
.contArticulo {
  height: auto;
  margin-bottom: 30px;
  display: flex;
}

.contTexto {
  width: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
  float: left;
}

.contImagen {
  width: 30%;
  height: 300px;
  float: right;
  display: flex;
  justify-content: center;
  align-items: center;
}

.contTextoInvertido {
  width: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
  float: right;
}

.contImagenInvertido {
  width: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
  float: left;
}

#bloqueTexto1,
#bloqueTexto2,
#bloqueTexto3 {
  width: 90%;
  font-size: 20px;
  font-weight: bold;
  text-align: justify;
}

.img1,
.img2,
.img3 {
  width: 90%;
  height: 90%;
  border-radius: 10px;
  box-shadow: 0 0 20px var(--primary-color);
  object-fit: cover;
  transition: 1000ms;
}
.img1:hover,
.img2:hover,
.img3:hover {
  opacity: 1;
  filter: grayscale(0%);
  box-shadow: 0 0 20px var(--secondary-color);
  transform: scale(1.03);
}

.contSeparador {
  display: flex;
  justify-content: center;
  align-items: center;
}

.separador {
  width: 100%;
  height: 15px;
  background-color: var(--primary-color);
}
@media (min-width: 481px) and (max-width: 1024px) {
  .contArticulo {
    display: grid;
    grid-template-columns: 1fr;
  }

  .contTexto,
  .contTextoInvertido {
    width: 100%;
    float: none;
    height: auto;
    margin-top: 20px;
  }

  .img1,
  .img2,
  .img3,
  .contImagen,
  .contImagenInvertido {
    display: none;
  }
}
@media (max-width: 480px) {
  .contArticulo {
    display: grid;
    grid-template-columns: 1fr;
  }

  .contTexto,
  .contTextoInvertido {
    width: 100%;
    float: none;
    height: auto;
  }

  .img1,
  .img2,
  .img3,
  .contImagen,
  .contImagenInvertido {
    display: none;
  }

  #bloqueTexto1,
  #bloqueTexto2,
  #bloqueTexto3 {
    width: 90%;
    font-size: 14px;
    padding: 15px;
  }
  .titulo {
    font-size: 15px;
    text-align: center;
  }
}
</style>
