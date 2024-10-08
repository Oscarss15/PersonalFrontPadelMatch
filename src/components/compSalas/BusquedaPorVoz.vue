<script setup>
import { ref, defineEmits } from "vue";

const searchQuery = ref("");
const emit = defineEmits(["update:searchQuery"]);
const recognitionLang = ref("es-ES");
const isRecognizing = ref(false);

const placeholders = {
  "es-ES": "Buscar sala por ciudad, lugar, fecha o utiliza el microfono",
  "fr-FR": "Chercher une salle par ville, lieu, date ou utilisez le microphone",
  "en-US": "Search for a room by city, place, date, or use the microphone",
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
    const transcript = event.results[0][0].transcript;
    searchQuery.value = transcript;
    emit("update:searchQuery", searchQuery.value);
  };

  recognition.onerror = (event) => {
    console.error("Error en reconocimiento de voz: ", event.error);
  };

  recognition.onend = () => {
    console.log("Reconocimiento de voz terminado.");
    isRecognizing.value = false;
  };
};

const setLanguageToSpanish = () => {
  recognitionLang.value = "es-ES";
  placeholderText.value = placeholders["es-ES"];
  startRecognition();
};

const setLanguageToFrench = () => {
  recognitionLang.value = "fr-FR";
  placeholderText.value = placeholders["fr-FR"];
  startRecognition();
};

const setLanguageToEnglish = () => {
  recognitionLang.value = "en-US";
  placeholderText.value = placeholders["en-US"];
  startRecognition();
};

const updateSearchQuery = () => {
  emit("update:searchQuery", searchQuery.value);
};
</script>

<template>
  <div class="buscador-combinado">
    <input
      type="text"
      v-model="searchQuery"
      :placeholder="placeholderText"
      class="search-bar"
      @input="updateSearchQuery"
    />
    <button @click="setLanguageToSpanish" class="voz-buttonPais">
      <img
        class="bandera"
        src="../../assets/img/banderas/espana.png"
        alt="Español"
      />
    </button>
    <button @click="setLanguageToFrench" class="voz-buttonPais">
      <img
        class="bandera"
        src="../../assets/img/banderas/francia.png"
        alt="Francés"
      />
    </button>
    <button @click="setLanguageToEnglish" class="voz-buttonPais">
      <img
        class="bandera"
        src="../../assets/img/banderas/reinoUnido.png"
        alt="Inglés"
      />
    </button>

    <button class="voz-button" :class="{ active: isRecognizing }">🎙️</button>
  </div>
</template>

<style scoped>
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
.voz-button.active {
  background-color: white;
  padding: 10px;
  border-radius: 20px;
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
@media (max-width: 480px) {
  .search-bar {
    font-size: 15px;
  }
  .bandera {
    width: 20px;
  }
}
</style>
