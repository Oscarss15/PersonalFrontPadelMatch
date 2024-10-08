<script setup>
import { ref, defineEmits } from "vue";

const emit = defineEmits(["sala-added"]);

const showModal = ref(false);

const formData = ref({
  ciudad: "",
  lugar: "",
  fecha: "",
  hora: "",
});

const openModal = () => {
  showModal.value = true;
};

const closeModal = () => {
  showModal.value = false;
};

const submitForm = () => {
  const newSala = { ...formData.value };
  emit("sala-added", newSala);
  closeModal();
};
</script>
<template>
  <div class="containerPrincipal">
    <button class="button" @click="openModal">
      Añadir Sala
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </button>

    <div v-if="showModal" class="modal-background" @click="closeModal">
      <div class="modal-content" @click.stop>
        <h2>Añadir Sala</h2>
        <form @submit.prevent="submitForm" class="form-grid">
          <div>
            <label for="ciudad">Ciudad</label>
            <input v-model="formData.ciudad" type="text" id="ciudad" required />
          </div>
          <div>
            <label for="lugar">Lugar</label>
            <input v-model="formData.lugar" type="text" id="lugar" required />
          </div>
          <div>
            <label for="fecha">Fecha</label>
            <input v-model="formData.fecha" type="date" id="fecha" required />
          </div>
          <div>
            <label for="hora">Hora</label>
            <input v-model="formData.hora" type="time" id="hora" required />
          </div>

          <div class="submit-btn">
            <button type="submit">Enviar</button>
          </div>
        </form>
        <button class="cerrar" @click="closeModal">Cerrar</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.containerPrincipal {
  display: flex;
  justify-content: center;
  align-items: center;

  height: 150px;
}
.button {
  width: 700px;
  height: 70px;
  background-color: var(--primary-color);
  border-style: none;
  color: #fff;
  font-size: 23px;
  letter-spacing: 3px;
  font-family: "Black Ops One", system-ui;
  font-weight: 600;
  outline: none;
  cursor: pointer;
  position: relative;
  padding: 0px;
  overflow: hidden;
  transition: all 0.5s;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
}

.button span {
  position: absolute;
  display: block;
}

.button span:nth-child(1) {
  height: 3px;
  width: 500px;
  top: 0px;
  left: -500px;
  background: linear-gradient(
    to right,
    rgba(0, 0, 0, 0),
    var(--secondary-color)
  );
  border-top-right-radius: 1px;
  border-bottom-right-radius: 1px;
  animation: span1 2s linear infinite;
  animation-delay: 1s;
}

@keyframes span1 {
  0% {
    left: -200px;
  }
  100% {
    left: 200px;
  }
}

.button span:nth-child(2) {
  height: 70px;
  width: 3px;
  top: -70px;
  right: 0px;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0),
    var(--secondary-color)
  );
  border-bottom-left-radius: 1px;
  border-bottom-right-radius: 1px;
  animation: span2 2s linear infinite;
  animation-delay: 2.8s;
}

@keyframes span2 {
  0% {
    top: -70px;
  }
  100% {
    top: 70px;
  }
}

.button span:nth-child(3) {
  height: 3px;
  width: 500px;
  right: -500px;
  bottom: 0px;
  background: linear-gradient(
    to left,
    rgba(0, 0, 0, 0),
    var(--secondary-color)
  );
  border-top-left-radius: 1px;
  border-bottom-left-radius: 1px;
  animation: span3 2s linear infinite;
  animation-delay: 4s;
}

@keyframes span3 {
  0% {
    right: -200px;
  }
  100% {
    right: 200px;
  }
}

.button span:nth-child(4) {
  height: 70px;
  width: 3px;
  bottom: -70px;
  left: 0px;
  background: linear-gradient(to top, rgba(0, 0, 0, 0), var(--secondary-color));
  border-top-right-radius: 1px;
  border-top-left-radius: 1px;
  animation: span4 2s linear infinite;
  animation-delay: 4s;
}

@keyframes span4 {
  0% {
    bottom: -70px;
  }
  100% {
    bottom: 70px;
  }
}

.button:hover {
  transition: all 0.5s;
  transform: rotate(-3deg) scale(1.1);
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.4);
  background-color: var(--secondary-color);
  color: var(--primary-color);
}

.button:hover span {
  animation-play-state: paused;
}

.modal-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1050;
}

.modal-content {
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  width: 500px;
  max-width: 90%;
  text-align: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  z-index: 1060;
}

.modal-content h2 {
  margin-top: 0;
}

.form-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5px;
}
.form-grid select {
  width: 100%;
  padding: 8px;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: white;
  color: var(--primary-color);
}
.form-grid div {
  margin-bottom: 15px;
}

.form-grid label {
  display: block;
  font-weight: bold;
}

.form-grid input {
  width: 100%;
  padding: 8px;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.submit-btn {
  grid-column: span 2;
  display: flex;
  justify-content: center;
  font-weight: bold;
}

.modal-content form button {
  margin-top: 20px;
  padding: 10px 20px;
  background-color: var(--primary-color);
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 5px;
}

.modal-content form button:hover {
  background-color: var(--secondary-color);
  color: var(--primary-color);
}

.modal-content button:hover {
  background-color: var(--secondary-color);
  color: var(--primary-color);
}
.cerrar {
  background-color: var(--primary-color);
  color: white;
  border-radius: 10px;
  height: 40px;
  border: none;
  font-weight: bold;
}
h2 {
  background-color: var(--primary-color);
  height: 40px;
  border-radius: 10px;
  color: white;
  font-size: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
}
label {
  background-color: var(--primary-color);
  height: 20px;
  border-radius: 10px;
  color: white;
  font-size: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
}

@media (max-width: 480px) {
  .button {
    width: 300px;
  }
}
</style>
