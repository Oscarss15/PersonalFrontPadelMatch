<script setup>
import TituloHome from "@/components/compHome/TituloHome.vue";
import CardsHome from "@/components/compHome/CardsHome.vue";
import NavbarLogueado from "@/components/Navbars/NavbarLogueado.vue";
import ColoresApp from "@/components/esquemaColores/ColoresApp.vue";
</script>

<template>
  <NavbarLogueado></NavbarLogueado>

  <main>
    <TituloHome></TituloHome>
    <CardsHome></CardsHome>
    <ColoresApp></ColoresApp>
  </main>
</template>
<style scoped>
main {
  background-image: url("../assets/img/login/fondo.png");
}
</style>
