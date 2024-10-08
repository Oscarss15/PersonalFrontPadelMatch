<script setup></script>
<template>
  <h2>PADEL</h2>
  <img id="ballPadel" src="../../assets/img/navbar/ballPadel2.png" alt="" />
  <h2>MATCH</h2>
</template>
<style scoped>
h2 {
  font-size: 120px;
  font-weight: bold;
  color: var(--primary-color);
}
#ballPadel {
  width: 120px;
  height: 120px;
  animation: girar 20s linear infinite;
}

@keyframes girar {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
@media (max-width: 1024px) and (min-width: 481px) {
  h2 {
    font-size: 45px;
    padding: 10px;
  }
  #ballPadel {
    width: 100px;
    height: 100px;
  }
}
@media (max-width: 480px) {
  h2 {
    font-size: 25px;
    padding: 10px;
  }
  #ballPadel {
    width: 60px;
    height: 60px;
  }
}
</style>
