vue Copiar código
<script setup>
import { ref, computed, onMounted } from "vue";
import NavbarLogueado from "@/components/Navbars/NavbarLogueado.vue";
import TituloSala from "@/components/compSala/TituloSala.vue";
import Chat from "@/components/compSala/Chat.vue";
import BotonConfirmarAsistencia from "@/components/compSala/BotonConfirmarAsistencia.vue";
import BotonSalir from "@/components/compSala/BotonSalir.vue";
import ColoresApp from "@/components/esquemaColores/ColoresApp.vue";
import Pista from "@/components/compSala/Pista.vue";
</script>

<template>
  <NavbarLogueado />
  <TituloSala></TituloSala>
  <main>
    <div class="containerPrincipal">
      <div class="containerPista">
        <Pista></Pista>
      </div>
      <div class="containerChat">
        <div class="chat">
          <Chat></Chat>
        </div>
        <div class="btnConfirmar">
          <BotonConfirmarAsistencia></BotonConfirmarAsistencia>
        </div>
        <div class="btnSalir">
          <BotonSalir></BotonSalir>
        </div>
      </div>
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
.containerPrincipal {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 627px;
  margin-bottom: 40px;
}
.containerPista {
  width: 100%;
  min-height: 627px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.containerChat {
  width: 100%;
  min-height: 427px;
}
.chat {
  width: 100%;
  min-height: 427px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
}
.btnConfirmar,
.btnSalir {
  width: 100%;
  height: 100px;

  display: flex;
  justify-content: center;
  align-items: center;
}
.containerPista {
  display: flex;
  justify-content: center;
  align-items: center;
}

@media (min-width: 481px) and (max-width: 1024px) {
  main {
    min-height: 950px;
  }
}
@media (max-width: 480px) {
  .containerPrincipal {
    display: grid;

    grid-template-columns: 1fr;
  }
}
</style>
