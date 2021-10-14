<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
*{
  padding: 0;
  margin: 0;
}

.page-wrapper{
  width: 100vw;
  height: 100vh;
  padding: 28px 40px;
  box-sizing: border-box;
  
  background: linear-gradient(180deg,#29262e 0,#29262e);
  min-width: 640px;
  min-height: 320px;
}

.title{
  font-size: 51px;
  font-weight: 600;
  line-height: 1.18;
  color: #bb9f89;
  text-align: center;
  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif;
}

</style>
