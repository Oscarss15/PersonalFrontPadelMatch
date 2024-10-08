<script setup>
import { defineProps } from "vue";

const props = defineProps({
  sala: {
    type: Object,
    required: true,
  },
});

const formatDate = (dateString) => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

const formatTime = (timeArray) => {
  const [hours, minutes] = timeArray;

  const formattedHours = String(hours).padStart(2, "0");
  const formattedMinutes = String(minutes).padStart(2, "0");
  return `${formattedHours}:${formattedMinutes}`;
};

const isDateInPast = (dateString) => {
  const today = new Date();
  const salaDate = new Date(dateString);
  return salaDate < today;
};

const viewDetails = (id) => {
  console.log("Ver detalles de la sala con ID:", id);
};
</script>
<template>
  <main v-if="!isDateInPast(sala.fecha)">
    <div class="containerCard">
      <div class="containerCiudad">{{ sala.ciudad }}</div>
      <div class="containerLugar">{{ sala.lugar }}</div>
      <div class="containerFecha">
        <div class="containerDia">{{ formatDate(sala.fecha) }}</div>
        <div class="containerHora">{{ formatTime(sala.hora) }}</div>
      </div>
      <div class="containerImagen">
        <img
          class="imgPista"
          src="../../assets/img/salas/padelpista2.jpg"
          alt="Pista de padel"
        />
      </div>
      <div class="contadorPersonas">
        <div class="numeroPersonas">
          <img
            class="imgIcono"
            src="../../assets/img/salas/iconoPersona.png"
            alt="Icono persona"
          />
          0/4
        </div>
        <div class="DetallesPersonas">
          <div class="container12Personas">
            <div class="contPersona1">
              <div class="Persona">
                <img
                  class="fotoPersona"
                  src="../../assets/img/salas/fotoPersona.png"
                  alt=""
                />
                Arturo Bootcamp
              </div>
            </div>
            <div class="contPersona2">
              <div class="Persona">
                <img
                  class="fotoPersona"
                  src="../../assets/img/salas/fotoPersona.png"
                  alt=""
                />
                Aitor Bootcamp
              </div>
            </div>
          </div>
          <div class="container34Personas">
            <div class="contPersona3">
              <div class="Persona">
                <img
                  class="fotoPersona"
                  src="../../assets/img/salas/fotoPersona.png"
                  alt=""
                />
                Conchi Bootcamp
              </div>
            </div>
            <div class="contPersona4">
              <div class="Persona">
                <img
                  class="fotoPersona"
                  src="../../assets/img/salas/fotoPersona.png"
                  alt=""
                />
                Antonella Bootcamp
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
main {
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.containerCard {
  width: 95%;
  height: 350px;
  border-radius: 10px;

  transition: 1s;
  position: relative;
}
.containerCard:hover {
  box-shadow: 0 0px 10px 20px var(--secondary-color);
}

.containerCiudad {
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  width: 100%;
  height: 60px;
  background-color: var(--primary-color);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  color: white;
}
.containerLugar {
  width: 100%;
  height: 40px;
  border-top: 2px solid white;
  border-bottom: 2px solid white;
  background-color: var(--primary-color);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  color: var(--secondary-color);
}
.containerFecha {
  width: 100%;
  height: 40px;
  border-bottom: 2px solid white;
  background-color: var(--primary-color);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  color: white;
}
.containerDia,
.containerHora {
  width: 50%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 15px;
}
.containerImagen {
  width: 100%;
  height: 150px;
  overflow: hidden;
  position: relative;
  z-index: 1;
}

.imgPista {
  width: 100%;
  height: 150px;
  object-fit: cover;
  transition: transform 1000ms;
}

.imgPista:hover {
  transform: scale(1.05);
}

.contadorPersonas {
  width: 100%;
  height: 60px;
  background-color: var(--primary-color);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top: 2px solid white;
  font-size: 30px;
  color: white;

  flex-direction: column;
  position: absolute;
  bottom: 0;
  z-index: 2;
  transition: height 0.5s ease, bottom 0.5s ease;
  overflow: hidden;
}
.numeroPersonas {
  width: 100%;
  height: 60px;
  border-bottom: 2px solid white;
  display: flex;
  justify-content: center;
  align-items: center;
}

.contadorPersonas:hover {
  height: 150px;
}

.textoAdicional {
  font-size: 15px;
  color: var(--secondary-color);
  opacity: 0;
  transition: opacity 0.5s ease;
  margin-top: 10px;
}

.contadorPersonas:hover .textoAdicional {
  opacity: 1;
}

.imgIcono {
  width: 35px;
  height: 35px;
  margin: 10px;
}
.DetallesPersonas {
  width: 100%;
  height: 90px;
}
.container12Personas,
.container34Personas {
  width: 100%;
  height: 45px;
}
.contPersona1,
.contPersona3 {
  width: 50%;
  height: 45px;
  float: left;
  font-size: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.Persona {
  width: 30%;
}
.contPersona2,
.contPersona4 {
  width: 50%;
  height: 45px;
  float: right;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
}

.fotoPersona {
  width: 30px;
  height: 30px;
  margin: 10px;
}
@media (min-width: 481px) and (max-width: 1024px) {
  .containerCards {
    grid-template-columns: 1fr;
    gap: 15px;
  }

  .containerCard {
    width: 95%;
  }

  .Persona {
    width: 50%;
  }
}
@media (max-width: 480px) {
  .containerCards {
    grid-template-columns: 1fr;
    gap: 15px;
  }

  .containerCard {
    width: 85%;
  }
  .Persona {
    width: 100%;
  }
  .contPersona1,
  .contPersona2,
  .contPersona3,
  .contPersona4 {
    font-size: 10px;
  }
  .containerFecha {
    font-size: 10px;
  }
  .containerDia,
  .containerHora {
    font-size: 10px;
  }
}
</style>
