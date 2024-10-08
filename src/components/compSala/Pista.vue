<script setup></script>
<template>
  <div class="pista">
    <div class="cuadrante1">
      <div class="cuadrados12">
        <div class="cuadrado1" id="jugador1">
          <div class="containerFoto">
            <img class="img" src="../../assets/img/sala/jugador1.png" alt="" />
          </div>
          <div class="containerNombre">Maria Fernandez</div>
        </div>
        <div class="cuadrado2"></div>
      </div>
      <div class="cuadrados34">
        <div class="cuadrado3"></div>
        <div class="cuadrado4" id="jugador3">
          <div class="containerFoto">
            <img class="img" src="../../assets/img/sala/jugador2.png" alt="" />
          </div>
          <div class="containerNombre">Mario Fernandez</div>
        </div>
      </div>
    </div>
    <div class="linea"></div>
    <div class="cuadrante2">
      <div class="cuadrados34">
        <div class="cuadrado3" id="jugador4">
          <div class="containerFoto">
            <img class="img" src="../../assets/img/sala/jugador4.png" alt="" />
          </div>
          <div class="containerNombre">Carlos Martinez</div>
        </div>
        <div class="cuadrado4"></div>
      </div>
      <div class="cuadrados12">
        <div class="cuadrado1"></div>
        <div class="cuadrado2" id="jugador2">
          <div class="containerFoto">
            <img class="img" src="../../assets/img/sala/jugador3.png" alt="" />
          </div>
          <div class="containerNombre">Lucia Martinez</div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.pista {
  width: 500px;
  height: 600px;
}
.cuadrante1 {
  width: 100%;
  height: 294px;
  background-color: var(--primary-color);
  display: flex;
  flex-direction: column;
}
.linea {
  width: 100%;
  height: 12px;
  background-color: white;
}
.cuadrante2 {
  width: 100%;
  height: 294px;
  background-color: var(--primary-color);
  display: flex;
  flex-direction: column;
}
.cuadrados12 {
  width: 100%;
  height: 147px;
  border: 2px solid white;
}
.cuadrados34 {
  width: 100%;
  height: 147px;
  border: 2px solid white;
}
.cuadrado1,
.cuadrado3 {
  width: 50%;
  height: 147px;
  float: left;
}
.cuadrado2,
.cuadrado4 {
  width: 50%;
  height: 147px;
  float: right;
}
.cuadrado3 {
  border-right: 2px solid white;
}
.cuadrado4 {
  border-left: 2px solid white;
}
.containerFoto {
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.containerNombre {
  width: 100%;
  height: 47px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--secondary-color);
}
.img {
  width: 75px;
  height: 75px;
  border-radius: 45px;
  border: 2px solid var(--secondary-color);
}
@media (min-width: 481px) and (max-width: 1024px) {
  .pista {
    width: 420px;
  }
}
@media (max-width: 480px) {
  .pista {
    width: 90%;
  }
}
</style>
