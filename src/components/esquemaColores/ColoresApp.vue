<script>
export default {
  methods: {
    setPrimaryColor(primaryColor) {
      document.documentElement.style.setProperty(
        "--primary-color",
        primaryColor
      );
    },
    setSecondaryColor(secondaryColor) {
      document.documentElement.style.setProperty(
        "--secondary-color",
        secondaryColor
      );
    },
  },
};
</script>
<template>
  <div class="separador"></div>
  <div class="containerColores">
    <div class="containerPrimary">
      <button @click="setPrimaryColor('#2d3b57')">
        <img
          class="bola"
          src="/src/assets/img/navbar/bolaAzul.png"
          alt="Bola Azul"
        />
      </button>
      <button @click="setPrimaryColor('#272727')">
        <img
          class="bola"
          src="/src/assets/img/navbar/bolaNegra.png"
          alt="Bola Roja"
        />
      </button>
      <button @click="setPrimaryColor('#2f5641')">
        <img
          class="bola"
          src="/src/assets/img/navbar/bolaVerde.png"
          alt="Bola Verde"
        />
      </button>
    </div>

    <div class="containerSecondary">
      <button @click="setSecondaryColor('#b0fc33')">
        <img
          class="bola"
          src="/src/assets/img/navbar/bolaLima.png"
          alt="Bola Lima"
        />
      </button>
      <button @click="setSecondaryColor('#f938ff')">
        <img
          class="bola"
          src="/src/assets/img/navbar/bolaRosa.png"
          alt="Bola Rosa"
        />
      </button>

      <button @click="setSecondaryColor('#35fddc')">
        <img
          class="bola"
          src="/src/assets/img/navbar/bolaVerdeAzul.png"
          alt="Bola Verde Azul"
        />
      </button>
    </div>
  </div>
</template>

<style scoped>
.separador {
  width: 100%;
  height: 10px;
  color: white;
}
button {
  width: 35px;
  height: 35px;
  border-radius: 25px;
  background-color: white;
  margin: 25px;
}

.bola {
  width: 20px;
  height: 20px;
  border-radius: 25px;
}

.containerColores {
  width: 100%;
  height: 50px;
  background-color: var(--primary-color);
}
.containerPrimary {
  width: 50%;
  height: 50px;
  display: flex;
  justify-content: right;
  align-items: center;
  float: left;
}
.containerSecondary {
  width: 50%;
  height: 50px;
  display: flex;
  justify-content: left;
  align-items: center;
  float: right;
}
@media (max-width: 480px) {
  button {
    margin: 10px;
  }
}
</style>
