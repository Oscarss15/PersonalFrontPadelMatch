<script setup></script>
<template>
  <div id="space"></div>
  <div id="containerTitulo">Sala</div>
  <div id="space"></div>
</template>
<style scoped>
#containerTitulo {
  height: 100px;
  background-color: var(--primary-color);
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 60px;
  color: var(--secondary-color);
  box-shadow: 0 15px 15px var(--secondary-color);
}
#space {
  width: 100%;
  height: 10px;
  background-color: white;
}
</style>
