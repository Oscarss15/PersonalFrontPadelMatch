vue Copiar código
<script setup>
import { ref, computed, onMounted } from "vue";
import NavbarLogueado from "@/components/Navbars/NavbarLogueado.vue";
import TituloSalas from "@/components/compSalas/TituloSalas.vue";
import BotonAñadirSala from "@/components/compSalas/BotonAñadirSala.vue";
import CardSala from "@/components/compSalas/CardSala.vue";
import BusquedaPorVoz from "@/components/compSalas/BusquedaPorVoz.vue";
import ColoresApp from "@/components/esquemaColores/ColoresApp.vue";

const salas = ref([]);

const searchQuery = ref("");

const fetchSalas = async () => {
  try {
    const response = await fetch("http://localhost:8080/api/v1/salas/allsalas");
    if (response.ok) {
      const data = await response.json();
      salas.value = data;
    } else {
      console.error("Error fetching salas:", response.statusText);
    }
  } catch (error) {
    console.error("Error fetching salas:", error);
  }
};

onMounted(() => {
  fetchSalas();
});

const addSala = async (newSala) => {
  try {
    const response = await fetch("http://localhost:8080/api/v1/salas/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newSala),
    });

    if (response.ok) {
      const data = await response.json();
      salas.value.push(data);
    } else {
      console.error("Error adding sala:", response.statusText);
    }
  } catch (error) {
    console.error("Error adding sala:", error);
  }
};

const formatDateForFilter = (dateString) => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

const filteredSalas = computed(() => {
  if (!searchQuery.value) {
    return salas.value;
  }

  return salas.value.filter((sala) => {
    const ciudadMatch = sala.ciudad
      .toLowerCase()
      .includes(searchQuery.value.toLowerCase());
    const lugarMatch = sala.lugar
      .toLowerCase()
      .includes(searchQuery.value.toLowerCase());
    const fechaMatch = formatDateForFilter(sala.fecha)
      .toLowerCase()
      .includes(searchQuery.value.toLowerCase());

    return ciudadMatch || lugarMatch || fechaMatch;
  });
});
</script>

<template>
  <NavbarLogueado />

  <main :class="{ 'no-results': filteredSalas.length === 0 }">
    <TituloSalas />

    <BotonAñadirSala @sala-added="addSala" />

    <div class="busqueda">
      <BusquedaPorVoz v-model:searchQuery="searchQuery" />
    </div>

    <RouterLink class="decoration" to="sala"
      ><CardSala
        class="cardSala"
        v-for="sala in filteredSalas"
        :key="sala.id"
        :sala="sala"
    /></RouterLink>

    <div class="mostrarInfo">
      <p v-if="filteredSalas.length === 0" class="no-results-message">
        No se encontraron salas para la búsqueda.
      </p>
    </div>
    <ColoresApp></ColoresApp>
  </main>
</template>

<style scoped>
main {
  min-height: 400px;
  background: url("../assets/img/login/fondo.png") no-repeat center center;
  background-size: cover;
  object-fit: cover;
  background-attachment: fixed;
}
main.no-results {
  min-height: 627px;
}
.mostrarInfo {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 50px;
  color: #2d3b57;
}
.decoration {
  text-decoration: none;
}

.busqueda {
  display: flex;
  justify-content: center;
  align-items: center;
}
.search-bar {
  padding: 10px;
  width: 80%;
  background-color: #2d3b57;
  border: 2px solid white;
  border-radius: 25px;
  font-size: 20px;
}

.search-bar:focus {
  background-color: #b0fc33;
}
.search-bar::placeholder {
  color: white;
}

.search-bar:focus::placeholder {
  color: #2d3b57;
}

@media (min-width: 481px) and (max-width: 1024px) {
  main {
    min-height: 400px;
  }
  main.no-results {
    min-height: 1040px;
  }
}
@media (max-width: 480px) {
  .mostrarInfo {
    font-size: 15px;
  }
  .search-bar {
    width: 90%;
  }
  .search-bar::placeholder {
    font-size: 18px;
  }
}
</style>
