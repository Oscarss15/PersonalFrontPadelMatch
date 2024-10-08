<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const email = ref("");
const password = ref("");

const showModal = ref(false);
const errorMessage = ref("");

const handleLogin = () => {
  if (email.value === "admin" && password.value === "password_123") {
    router.push("/adminArticulos");
  } else if (email.value === "user" && password.value === "password_123") {
    router.push("/home");
  } else {
    errorMessage.value = "Credenciales incorrectas";
    showModal.value = true;
  }
};

const closeModal = () => {
  showModal.value = false;
};
</script>

<template>
  <div class="row full-height justify-content-center" id="contlogin">
    <div class="col-12 text-center align-self-center py-5">
      <div class="section pb-5 pt-5 pt-sm-2 text-center">
        <h6 class="mb-0 pb-3"><span>Log In </span><span>Registro</span></h6>
        <input class="checkbox" type="checkbox" id="reg-log" name="reg-log" />
        <label for="reg-log"></label>
        <div class="card-3d-wrap mx-auto">
          <div class="card-3d-wrapper">
            <div class="card-front">
              <div class="center-wrap">
                <div class="section text-center">
                  <h4 class="mb-4 pb-3" id="text">Log In</h4>
                  <div class="form-group">
                    <input
                      type="email"
                      v-model="email"
                      class="form-style"
                      placeholder="Tu Email"
                      id="logemail"
                      autocomplete="none"
                    />
                    <i class="input-icon fa fa-at"></i>
                  </div>
                  <div class="form-group mt-2">
                    <input
                      type="password"
                      v-model="password"
                      class="form-style"
                      placeholder="Tu Contraseña"
                      id="logpass"
                      autocomplete="none"
                    />
                    <i class="input-icon fa fa-lock"></i>
                  </div>
                  <a @click="handleLogin" class="btn mt-4">Login</a>
                </div>
              </div>
            </div>
            <div class="card-back">
              <div class="center-wrap">
                <div class="section text-center">
                  <h4 class="mb-4 pb-3" id="text">Registro</h4>
                  <div class="form-group">
                    <input
                      type="text"
                      name="logname"
                      class="form-style"
                      placeholder="Tu Nombre Completo"
                      id="logname"
                      autocomplete="none"
                    />
                    <i class="input-icon fa fa-user"></i>
                  </div>
                  <div class="form-group mt-2">
                    <input
                      type="email"
                      name="logemail"
                      class="form-style"
                      placeholder="Tu Email"
                      id="logemail"
                      autocomplete="none"
                    />
                    <i class="input-icon fa fa-at"></i>
                  </div>
                  <div class="form-group mt-2">
                    <input
                      type="password"
                      name="logpass"
                      class="form-style"
                      placeholder="Tu contraseña"
                      id="logpass"
                      autocomplete="none"
                    />
                    <i class="input-icon fa fa-lock"></i>
                  </div>
                  <a href="#" class="btn mt-4">Registro</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div v-if="showModal" class="modal-overlay">
    <div class="modal-content">
      <h3>Error</h3>
      <p>{{ errorMessage }}</p>
      <button @click="closeModal" class="modal-close-btn">Cerrar</button>
    </div>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Poppins:400,500,600,700,800,900");

a {
  cursor: pointer;
  transition: all 200ms linear;
}

a:hover {
  text-decoration: none;
}

.link {
  color: var(--primary-color);
}

.link:hover {
  color: var(--secondary-color);
}

p {
  font-weight: 500;
  font-size: 14px;
  line-height: 1.7;
}

h4 {
  font-weight: 600;
}

h6 span {
  padding: 0 20px;
  text-transform: uppercase;
  font-weight: 700;
}

.full-height {
  min-height: 100vh;
}

[type="checkbox"]:checked,
[type="checkbox"]:not(:checked) {
  position: absolute;
  left: -9999px;
}

.checkbox:checked + label,
.checkbox:not(:checked) + label {
  position: relative;
  display: block;
  text-align: center;
  width: 60px;
  height: 16px;
  border-radius: 2px;
  padding: 0;
  margin: 10px auto;
  cursor: pointer;
  background-color: var(--primary-color);
  z-index: 0;
}

.checkbox:checked + label:before,
.checkbox:not(:checked) + label:before {
  position: absolute;
  display: block;
  width: 36px;
  height: 36px;
  border-radius: 10%;
  color: var(--secondary-color);
  background-color: var(--primary-color);
  content: "";
  z-index: 0;
  font-size: 12px;
  top: -10px;
  left: -10px;
  line-height: 36px;
  text-align: center;
  font-size: 24px;
  transition: all 0.5s ease;
}

.checkbox:checked + label:before {
  transform: translateX(44px) rotate(-270deg);
}

.card-3d-wrap {
  position: relative;
  width: 440px;
  max-width: 100%;
  height: 400px;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  perspective: 800px;
  margin-top: 40px;
}

.card-3d-wrapper {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  transition: all 600ms ease-out;
}

.login-div {
  width: 150px;
}

.card-front,
.card-back {
  width: 100%;
  height: 100%;
  background-color: var(--primary-color);
  position: absolute;
  border-radius: 0px;
  left: 0;
  top: 0;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  backface-visibility: hidden;
  border-radius: 10px;
}

.card-back {
  transform: rotateY(180deg);
}

.checkbox:checked ~ .card-3d-wrap .card-3d-wrapper {
  transform: rotateY(180deg);
}

.center-wrap {
  position: absolute;
  width: 100%;
  padding: 0 35px;
  top: 50%;
  left: 0;
  transform: translate3d(0, -50%, 35px) perspective(100px);
  display: block;
}

.form-group {
  position: relative;
  display: block;
  margin: 0;
  padding: 0;
}

.form-style {
  padding: 13px 20px;
  padding-left: 55px;
  height: 48px;
  width: 100%;
  font-weight: 500;
  border-radius: 4px;
  font-size: 14px;
  line-height: 22px;
  letter-spacing: 0.5px;
  outline: none;
  color: var(--secondary-color);
  background-color: var(--primary-color);
  border: 1px solid var(--secondary-color);
  box-shadow: 0 0 5px var(--secondary-color);
  transition: all 200ms linear;
}

.input-icon {
  position: absolute;
  top: 0;
  left: 18px;
  height: 48px;
  font-size: 24px;
  line-height: 48px;
  text-align: left;
  color: var(--secondary-color);
  transition: all 200ms linear;
}

.form-group input:-ms-input-placeholder {
  color: var(--secondary-color);
  opacity: 0.7;
  transition: all 200ms linear;
}

.form-group input::-moz-placeholder {
  color: var(--secondary-color);
  opacity: 0.7;
  transition: all 200ms linear;
}

.form-group input:-moz-placeholder {
  color: var(--secondary-color);
  opacity: 0.7;
  transition: all 200ms linear;
}

.form-group input::-webkit-input-placeholder {
  color: var(--secondary-color);
  opacity: 0.7;
  transition: all 200ms linear;
}

.form-group input:focus:-ms-input-placeholder {
  opacity: 0;
  transition: all 200ms linear;
}

.form-group input:focus::-moz-placeholder {
  opacity: 0;
  transition: all 200ms linear;
}

.form-group input:focus:-moz-placeholder {
  opacity: 0;
  transition: all 200ms linear;
}

.form-group input:focus::-webkit-input-placeholder {
  opacity: 0;
  transition: all 200ms linear;
}

.btn {
  border-radius: 4px;
  height: 48px;
  width: 100%;
  font-size: 13px;
  font-weight: 600;
  text-transform: uppercase;
  transition: all 200ms linear;
  padding: 0 30px;
  letter-spacing: 1px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  -ms-flex-pack: center;
  text-align: center;
  border: none;
  background-color: var(--secondary-color);
  color: var(--primary-color);
  box-shadow: 0 8px 24px 0 rgba(18, 248, 173, 0.2);
}

.btn:active,
.btn:focus {
  background-color: var(--secondary-color);
  color: #2d3b57;
  box-shadow: 0 8px 24px 0 rgba(255, 255, 255, 0.2);
}

.btn:hover {
  background-color: var(--primary-color);
  color: var(--secondary-color);
  border: 1px solid var(--secondary-color);
  box-shadow: 0 0 10px var(--secondary-color);
}

.logo {
  position: absolute;
  top: 30px;
  right: 30px;
  display: block;

  transition: all 250ms linear;
}

.logo img {
  height: 26px;
  width: auto;
  display: block;
}
h6 {
  color: var(--primary-color);
  font-size: 20px;
}
#text {
  color: var(--secondary-color);
}
.modal-overlay {
  position: fixed;

  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.modal-content {
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  width: 50%;
}

.modal-close-btn {
  margin-top: 20px;
  padding: 10px 20px;
  background-color: var(--primary-color);
  border: none;
  border-radius: 4px;
  color: white;
  cursor: pointer;
}

.modal-close-btn:hover {
  background-color: var(--secondary-color);
  color: var(--primary-color);
}
@media (max-width: 1024px) and (min-width: 481px) {
  #contlogin {
    width: 100%;
    margin-top: 200px;
  }
}
@media (max-width: 480px) {
  #contlogin {
    width: 85%;
  }
  input::placeholder {
    font-size: 10px;
  }
}
</style>
