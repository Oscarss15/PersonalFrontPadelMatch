<script setup>
import TituloAdminArticulos from "@/components/admin/TituloAdminArticulos.vue";
import NavBarAdmin from "@/components/Navbars/NavBarAdmin.vue";
import TablaAdminArticulos from "@/components/admin/TablaAdminArticulos.vue";
import ColoresApp from "@/components/esquemaColores/ColoresApp.vue";
</script>
<template>
  <NavBarAdmin></NavBarAdmin>
  <main>
    <TituloAdminArticulos></TituloAdminArticulos>

    <div id="containerTabla">
      <TablaAdminArticulos></TablaAdminArticulos>
    </div>
    <ColoresApp></ColoresApp>
  </main>
</template>
<style scoped>
main {
  min-height: 657px;
  background: url("../assets/img/login/fondo.png") no-repeat center center;
  background-size: cover;
  object-fit: cover;
  background-attachment: fixed;
}

@media (min-width: 481px) and (max-width: 1024px) {
  main {
    min-height: 1100px;
  }
}
</style>
