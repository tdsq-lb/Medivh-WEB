<template>
 <!-- <img alt="Vue logo" src="./assets/logo.png" />
 <HelloWorld msg="Hello Vue 3.0 + Vite" /> -->
 <router-view></router-view>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";

export default {
 name: "App",
 components: {
  // HelloWorld,
 },
 methods: {
  _isMobile() {
   let flag = navigator.userAgent.match(
    /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
   );
   return flag;
  },
 },
 mounted() {
  if (this._isMobile()) {
   alert("手机端");
   this.$router.replace("/m_index");
  } else {
   alert("pc端");
   this.$router.replace("/pc_index");
  }
 },
};
</script>
