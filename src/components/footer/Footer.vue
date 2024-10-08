<script setup></script>

<template>
  <footer
    class="text-center text-lg-start"
    style="background-color: var(--primary-color)"
  >
    <div class="container d-flex justify-content-center py-5">
      <button
        type="button"
        class="btn btn-primary btn-lg btn-floating mx-2"
        id="btnfb"
      >
        <i class="fab fa-facebook-f"></i>
      </button>
      <button
        type="button"
        class="btn btn-primary btn-lg btn-floating mx-2"
        id="btntw"
      >
        <i class="fab fa-twitter"></i>
      </button>
      <button
        type="button"
        class="btn btn-primary btn-lg btn-floating mx-2"
        id="btnig"
      >
        <i class="fab fa-instagram"></i>
      </button>
      <button
        type="button"
        class="btn btn-primary btn-lg btn-floating mx-2"
        id="btnws"
      >
        <i class="fab fa-whatsapp"></i>
      </button>
    </div>

    <div
      class="text-center p-3"
      style="background-color: #404040"
      id="divfooter"
    >
      © 2024 Copyright:
      <a
        class="linkProyecto"
        href="https://github.com/Oscarss15/PersonalFront"
        target="_blank"
        >PadelMatch</a
      >
    </div>
  </footer>
</template>

<style scoped>
footer {
  box-shadow: 0 -10px 15px var(--secondary-color);
  z-index: 1000;
  margin-top: 30px;
}

button {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  border: 2px solid var(--secondary-color);
  box-shadow: 0 0 5px var(--secondary-color);
  background-color: var(--primary-color);
  transition: transform 0.3s;
}

i {
  color: var(--secondary-color);
}

button:hover i {
  color: var(--primary-color);
}

#btnfb:hover,
#btntw:hover,
#btnig:hover,
#btnws:hover {
  transform: scale(1.1);
  background-color: var(--secondary-color);
  box-shadow: 0 0 15px var(--secondary-color);
  border: 2px solid var(--secondary-color);
}

#btnws,
#btnig,
#btntw,
#btnfb {
  transition: transform 3s;
  transform-style: preserve-3d;
}

#divfooter {
  color: white;
  box-shadow: 0 0 15px var(--secondary-color);
}

.linkProyecto {
  font-size: 18px;
  color: var(--secondary-color);
}

button,
button:hover {
  cursor: url("../assets/img/cursor/cursorPadel.cur"), pointer;
}
@media (min-width: 481px) and (max-width: 1024px) {
  footer {
    margin-top: 30px;
  }
}
@media (max-width: 481px) {
  button {
    width: 60px;
    height: 60px;
  }
  footer {
    margin-top: 30px;
  }
}
</style>
