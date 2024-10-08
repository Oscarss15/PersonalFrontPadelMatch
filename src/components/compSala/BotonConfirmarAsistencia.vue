<script setup></script>
<template>
  <div id="containerButton">
    <button class="button">
      Confirmar Asistencia
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </button>
  </div>
</template>
<style scoped>
#containerButton {
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.button {
  width: 400px;
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
@media (max-width: 480px) {
  #containerButton {
    width: 300px;
  }
  .button {
    font-size: 15px;
  }
}
</style>
