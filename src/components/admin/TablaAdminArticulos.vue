<script setup>
import { ref, onMounted, computed } from "vue";

const articulos = ref([]);
const searchQuery = ref("");
const recognitionLang = ref("es-ES");
const isRecognizing = ref(false);
const placeholders = {
  "es-ES":
    "Buscar o eliminar por ID, título, autor, tipo o utiliza el micrófono",
  "en-US": "Search or delete by ID, title, author, type or use the microphone",
};
const placeholderText = ref(placeholders[recognitionLang.value]);

const startRecognition = () => {
  if (!("webkitSpeechRecognition" in window)) {
    alert(
      "Lo siento, tu navegador no soporta la API de reconocimiento de voz."
    );
    return;
  }

  const recognition = new webkitSpeechRecognition();
  recognition.lang = recognitionLang.value;
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;

  isRecognizing.value = true;
  recognition.start();

  recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript.toLowerCase();
    searchQuery.value = transcript;

    // Detectar si el usuario quiere eliminar un artículo
    if (transcript.includes("eliminar artículo")) {
      const idMatch = transcript.match(/\d+/); // Buscar el número (ID)
      if (idMatch) {
        const id = parseInt(idMatch[0], 10);
        deleteArticulo(id); // Llamar a la función para eliminar
      } else {
        alert("No se detectó un ID válido para eliminar.");
      }
    }
  };

  recognition.onerror = (event) => {
    console.error("Error en reconocimiento de voz: ", event.error);
  };

  recognition.onend = () => {
    isRecognizing.value = false;
  };
};

const setLanguageToSpanish = () => {
  recognitionLang.value = "es-ES";
  placeholderText.value = placeholders["es-ES"];
  startRecognition();
};

const setLanguageToEnglish = () => {
  recognitionLang.value = "en-US";
  placeholderText.value = placeholders["en-US"];
  startRecognition();
};

const filteredArticulos = computed(() => {
  return articulos.value.filter((articulo) => {
    const query = searchQuery.value.toLowerCase();
    return (
      articulo.titulo.toLowerCase().includes(query) ||
      articulo.autor.toLowerCase().includes(query) ||
      articulo.tipo.toLowerCase().includes(query) ||
      articulo.id.toString().includes(query)
    );
  });
});

const showModal = ref(false);
const modalContent = ref("");

const openModal = (texto) => {
  modalContent.value = texto;
  showModal.value = true;
};

const closeModal = () => {
  showModal.value = false;
};

const showEditModal = ref(false);
const nuevoArticulo = ref({
  titulo: "",
  autor: "",
  tipo: "",
  fecha: "",
  texto1: "",
  texto2: "",
  texto3: "",
  imagen1: null,
  imagen2: null,
  imagen3: null,
});

const openEditModal = () => {
  showEditModal.value = true;
};

const closeEditModal = () => {
  showEditModal.value = false;

  nuevoArticulo.value = {
    titulo: "",
    autor: "",
    tipo: "",
    fecha: "",
    texto1: "",
    texto2: "",
    texto3: "",
    imagen1: null,
    imagen2: null,
    imagen3: null,
  };
};

const addArticulo = async () => {
  const formData = new FormData();
  formData.append("titulo", nuevoArticulo.value.titulo);
  formData.append("autor", nuevoArticulo.value.autor);
  formData.append("tipo", nuevoArticulo.value.tipo);
  formData.append("fecha", nuevoArticulo.value.fecha);
  formData.append("texto1", nuevoArticulo.value.texto1);
  formData.append("texto2", nuevoArticulo.value.texto2);
  formData.append("texto3", nuevoArticulo.value.texto3);

  if (nuevoArticulo.value.imagen1) {
    formData.append("imagen1", nuevoArticulo.value.imagen1);
  }
  if (nuevoArticulo.value.imagen2) {
    formData.append("imagen2", nuevoArticulo.value.imagen2);
  }
  if (nuevoArticulo.value.imagen3) {
    formData.append("imagen3", nuevoArticulo.value.imagen3);
  }

  try {
    const response = await fetch(
      "http://localhost:8080/api/v1/articulos/create",
      {
        method: "POST",
        body: formData,
      }
    );

    if (response.ok) {
      const data = await response.json();
      console.log("Artículo añadido:", data);

      await fetchArticulos();
      closeEditModal();
    } else {
      console.error("Error al añadir el artículo:", response.statusText);
    }
  } catch (error) {
    console.error("Error al añadir el artículo:", error);
  }
};

const fetchArticulos = async () => {
  try {
    const response = await fetch(
      "http://localhost:8080/api/v1/articulos/allarticulos"
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

const deleteArticulo = async (id) => {
  try {
    await fetch(`http://localhost:8080/api/v1/articulos/${id}`, {
      method: "DELETE",
    });
    articulos.value = articulos.value.filter((articulo) => articulo.id !== id);
    console.log(`Artículo con ID ${id} eliminado.`);
  } catch (error) {
    console.log("Error al eliminar el artículo:", error);
  }
};

onMounted(() => {
  fetchArticulos();
});
</script>
<template>
  <div id="containerAñadirArticulo">
    <button class="button" @click="openEditModal()">
      Añadir Artículo
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </button>

    <div
      v-if="showEditModal"
      class="modal-background"
      @click.self="closeEditModal"
    >
      <div class="modal-content" @click.stop>
        <h2>Añadir Artículo</h2>
        <form @submit.prevent="addArticulo" class="form-grid">
          <div>
            <label for="titulo">Título</label>
            <input
              v-model="nuevoArticulo.titulo"
              type="text"
              id="titulo"
              required
            />
          </div>
          <div>
            <label for="autor">Autor</label>
            <input
              v-model="nuevoArticulo.autor"
              type="text"
              id="autor"
              required
            />
          </div>
          <div>
            <label for="tipo">Tipo</label>
            <select v-model="nuevoArticulo.tipo" id="tipo" required>
              <option value="técnica">Técnica</option>
              <option value="psicología">Psicología</option>
            </select>
          </div>
          <div>
            <label for="fecha">Fecha</label>
            <input
              v-model="nuevoArticulo.fecha"
              type="date"
              id="fecha"
              required
            />
          </div>
          <div>
            <label for="texto1">Texto 1</label>
            <input v-model="nuevoArticulo.texto1" type="text" id="texto1" />
          </div>
          <div>
            <label for="texto2">Texto 2</label>
            <input v-model="nuevoArticulo.texto2" type="text" id="texto2" />
          </div>
          <div>
            <label for="texto3">Texto 3</label>
            <input v-model="nuevoArticulo.texto3" type="text" id="texto3" />
          </div>
          <div>
            <label for="imagen1">Imagen 1</label>
            <input
              type="file"
              id="imagen1"
              @change="(e) => (nuevoArticulo.imagen1 = e.target.files[0])"
              accept="image/*"
            />
          </div>
          <div>
            <label for="imagen2">Imagen 2</label>
            <input
              type="file"
              id="imagen2"
              @change="(e) => (nuevoArticulo.imagen2 = e.target.files[0])"
              accept="image/*"
            />
          </div>
          <div>
            <label for="imagen3">Imagen 3</label>
            <input
              type="file"
              id="imagen3"
              @change="(e) => (nuevoArticulo.imagen3 = e.target.files[0])"
              accept="image/*"
            />
          </div>
          <div class="submit-btn">
            <button type="submit">Añadir Artículo</button>
          </div>
        </form>
        <button class="cerrar" @click="closeEditModal">Cerrar</button>
      </div>
    </div>
  </div>

  <div id="containerBusqueda">
    <div class="buscador-combinado">
      <input
        type="text"
        v-model="searchQuery"
        :placeholder="placeholderText"
        class="search-bar"
      />

      <button
        @click="startRecognition"
        class="voz-button"
        :class="{ active: isRecognizing }"
      >
        🎙️
      </button>
    </div>
  </div>

  <div id="containerTabla">
    <div class="table-responsive">
      <table class="table table-striped custom-table-dark">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Título</th>
            <th scope="col">Autor</th>
            <th scope="col">Tipo</th>
            <th scope="col">Fecha</th>
            <th scope="col">Texto 1</th>
            <th scope="col">Texto 2</th>
            <th scope="col">Texto 3</th>
            <th scope="col">Imagen 1</th>
            <th scope="col">Imagen 2</th>
            <th scope="col">Imagen 3</th>
            <th scope="col">Editar</th>
            <th scope="col">Eliminar</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="articulo in filteredArticulos" :key="articulo.id">
            <th scope="row">{{ articulo.id }}</th>
            <td>{{ articulo.titulo }}</td>
            <td>{{ articulo.autor }}</td>
            <td>{{ articulo.tipo }}</td>
            <td>{{ articulo.fecha }}</td>
            <td>
              <span class="ver-info" @click="openModal(articulo.texto1)"
                >+Info</span
              >
            </td>
            <td>
              <span class="ver-info" @click="openModal(articulo.texto2)"
                >+Info</span
              >
            </td>
            <td>
              <span class="ver-info" @click="openModal(articulo.texto3)"
                >+Info</span
              >
            </td>
            <td>{{ articulo.imagen1 }}</td>
            <td>{{ articulo.imagen2 }}</td>
            <td>{{ articulo.imagen3 }}</td>
            <td>
              <img
                class="img"
                src="../../assets/img/admin/editarArticulo.png"
                alt="Editar"
                @click="openEditModal(articulo)"
              />
            </td>
            <td>
              <img
                class="img"
                src="../../assets/img/admin/eliminarArticulo.png"
                alt="Eliminar"
                @click="deleteArticulo(articulo.id)"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <div id="modal" class="modal">
    <div class="modal-content">
      <span class="close" id="closeModal">&times;</span>
      <p id="modalMessage"></p>
      <button id="confirmButton">Aceptar</button>
    </div>
  </div>

  <div v-if="showModal" class="modal-background" @click.self="closeModal">
    <div class="modal-content" @click.stop>
      <h2>Información</h2>
      <p>{{ modalContent }}</p>
      <button class="cerrar" @click="closeModal">Cerrar</button>
    </div>
  </div>
</template>

<style scoped>
#containerBusqueda {
  width: 100%;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.buscador-combinado {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90%;
  background-color: var(--primary-color);
  border: 3px solid white;
  border-radius: 25px;
}

.search-bar {
  padding: 10px;
  width: 100%;
  background-color: var(--primary-color);
  border: none;
  border-radius: 25px;
  font-size: 20px;
  color: white;
}
.search-bar::placeholder {
  color: #c1c1c1;
}
.search-bar:focus {
  outline: none;
  box-shadow: none;
}

.voz-button {
  margin-left: 10px;
  padding: 10px;
  background-color: var(--primary-color);
  border: none;
  border-radius: 25px;
  cursor: pointer;
  font-size: 20px;
  color: white;
}
.voz-button:hover {
  padding: 10px;
}

.voz-buttonPais {
  margin-left: 10px;
  padding: 5px;
  background-color: var(--primary-color);
  border: none;
  border-radius: 25px;
  cursor: pointer;
  font-size: 20px;
  color: white;
}

.voz-buttonPais:hover {
  background-color: white;
}
.voz-button.active {
  background-color: white;
}
#containerAñadirArticulo {
  width: 100%;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
}
#containerTabla {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
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
}

.modal-content {
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  width: 500px;
  max-width: 90%;
  text-align: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
}

.form-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5px;
}

.form-grid div {
  margin-bottom: 15px;
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

.modal-content button:hover {
  background-color: var(--secondary-color);
  color: #2d3b57;
}

.cerrar {
  background-color: var(--primary-color);
  color: white;
  border-radius: 10px;
  height: 40px;
  border: none;
  font-weight: bold;
}
.table-responsive {
  width: 90%;
  box-shadow: 0 0 20px var(--primary-color);
  border-radius: 10px;
  overflow-x: auto;
  box-sizing: border-box;
  background-color: var(--primary-color);
}

.custom-table-dark {
  background-color: var(--primary-color);
  color: #fff !important;
}

.custom-table-dark th {
  background-color: var(--primary-color);
  color: var(--secondary-color);
  padding: 10px;
}

.custom-table-dark tr {
  background-color: var(--primary-color);
  color: white;
}

.custom-table-dark td {
  padding: 8px;
  background-color: var(--primary-color);
  color: white;
}

.img {
  width: 30px;
  height: 30px;
}

.img:hover {
  cursor: pointer;
}

.ver-info {
  color: var(--secondary-color);
  cursor: pointer;
}

.ver-info:hover {
  color: white;
}

.table-responsive::-webkit-scrollbar {
  height: 8px;
}

.table-responsive::-webkit-scrollbar-thumb {
  background-color: var(--secondary-color);
  border-radius: 10px;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 90%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5000;
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
  background-color: var(--primary-color);
  color: white;
  padding: 3px;
  border-radius: 10px;
}

.form-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5px;
}

.form-grid div {
  margin-bottom: 15px;
}

.form-grid label {
  display: block;
  font-weight: bold;
  background-color: var(--primary-color);
  border-radius: 10px;
  color: White;
}

.form-grid input,
.form-grid select {
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

.modal-content button:hover {
  background-color: var(--secondary-color);
  color: #2d3b57;
}

.cerrar {
  background-color: var(--primary-color);
  color: white;
  border-radius: 10px;
  height: 40px;
  border: none;
  font-weight: bold;
}

table button {
  border: none;
  background-color: transparent;
  cursor: pointer;
  padding: 5px;
}

table button:hover {
  opacity: 0.7;
}
#BloqueTexto {
  background-color: var(--primary-color);
  color: white;
  border-radius: 10px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
  width: 85%;
}
#btnCerrar {
  background-color: var(--primary-color);
  border-radius: 10px;
}
#btnCerrar:hover {
  background-color: var(--secondary-color);
  font-weight: bold;
  color: var(--primary-color);
  border-color: white;
}
#cntbloqueTexto {
  display: flex;
  justify-content: center;
  align-items: center;
}
.button {
  width: 300px;
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
  width: 200px;
  top: 0px;
  left: -200px;
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
  animation-delay: 2s;
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
  width: 200px;
  right: -200px;
  bottom: 0px;
  background: linear-gradient(
    to left,
    rgba(0, 0, 0, 0),
    var(--secondary-color)
  );
  border-top-left-radius: 1px;
  border-bottom-left-radius: 1px;
  animation: span3 2s linear infinite;
  animation-delay: 3s;
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

.voz-buttonPais:hover {
  background-color: white;
}

@media (max-width: 480px) {
  .search-bar {
    font-size: 10px;
  }
}
</style>
