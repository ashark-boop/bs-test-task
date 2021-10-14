<template>
  <div class="page-wrapper">
    <div class="menu">
      <p class="title">МЕНЮ</p>
      <div class="links">
        <a href="/converter" class="link">КОНВЕРТЕР</a>
        <a href="/case" class="link">ПОРТФЕЛЬ</a>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'HomePage'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.menu{
  box-shadow: 0 0 24px 0 rgb(0 0 0 / 50%);
  background: linear-gradient(180deg,#29262e 0,#29262e);

  width: 100%;
  height: 100%;

  box-sizing: border-box;

  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.links{
  display: flex;
  flex-direction: column;

  padding: 20px;
}


.link{
  font-size: 32px;
  font-weight: 600;
  line-height: 1.18;
  color: #bb9f89;
  text-align: center;
  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif;

  padding: 10px 20px;
  border: 3px solid #bb9f89;
  text-decoration: none;
  display: inline-block;
}

.link:nth-child(2){
  margin-top: 20px;
}

</style>
