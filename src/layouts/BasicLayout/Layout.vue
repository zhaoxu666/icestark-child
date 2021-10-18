<template>
  <div class="icestark-child-app">
    <div class="side-bar">
      <Menu />
    </div>
    <div class="container">
      <router-view />
    </div>
    
  </div>
</template>
<script>
import Menu from "../Menu";
export default {
  components: {
    Menu,
  },
};
</script>
<style lang="scss" scoped>
.icestark-child-app {
  display: flex;
  height: 100%;
}
.side-bar {
  width: 200px;
  height: 100%;
}

.container {
  flex: 1;
  padding: 10px;
}


</style>