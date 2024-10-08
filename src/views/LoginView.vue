<script setup>
import TitleLogin from "@/components/compLogin/TitleLogin.vue";
import TitleSecondaryLogin from "@/components/compLogin/TitleSecondaryLogin.vue";
import Login from "@/components/compLogin/Login.vue";
import Navbar from "@/components/Navbars/Navbar.vue";
import ColoresApp from "@/components/esquemaColores/ColoresApp.vue";
</script>

<template>
  <Navbar></Navbar>
  <ColoresApp></ColoresApp>
  <main>
    <div id="contTitleLogin">
      <div id="contTitle">
        <div id="contTextPrincipal">
          <TitleLogin></TitleLogin>
        </div>
        <div id="contTextSecondary">
          <TitleSecondaryLogin></TitleSecondaryLogin>
        </div>
      </div>
    </div>
    <div id="containerLogin">
      <Login></Login>
    </div>
  </main>
</template>
<style scoped>
main {
  width: 100%;
  min-height: 657px;
  background: url("../assets/img/login/fondo.png") no-repeat center center;
  background-size: cover;
  object-fit: cover;
  background-attachment: fixed;
}

#contTitleLogin {
  width: 65%;
  height: 655px;
  float: left;
  display: flex;
  align-items: center;
  justify-content: center;
}
#containerLogin {
  width: 35%;
  height: 655px;
  float: right;
  display: flex;
  align-items: center;
  justify-content: center;
}

#contTitle {
  width: 100%;
  height: 40%;
}

#contTextPrincipal {
  width: 100%;
  height: 70%;

  display: flex;
  align-items: center;
  justify-content: center;
}

#contTextSecondary {
  width: 100%;
  height: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
}
@media (max-width: 1024px) and (min-width: 481px) {
  main {
    min-height: 1250px;
  }
  #contTitleLogin {
    width: 100%;
    height: 400px;
    margin-bottom: 100px;
  }
  #containerLogin {
    margin-top: 100px;
    width: 100%;
    height: 100px;
  }
  #contTextPrincipal {
    height: 100px;
  }

  #contTextSecondary {
    height: 200px;
  }
}
@media (max-width: 480px) {
  #contTitleLogin {
    display: none;
  }
  #containerLogin {
    width: 100%;
    height: 600px;
  }
}
</style>
