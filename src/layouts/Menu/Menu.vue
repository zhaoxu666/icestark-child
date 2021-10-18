<template>
  <div class="menu">
    <el-menu
      :default-active="value"
      class="el-menu-vertical-demo"
      @select="handleSelect"
      background-color="#FFF"
      text-color="black"
      active-text-color="#1989fa"
      :style="{ height: '100%', boxShadow: '0px 1px 3px 0px rgb(0 0 0 / 12%)' }"
    >
      <el-menu-item index="/">小二首页 </el-menu-item>
      <el-menu-item index="/list">小二列表 </el-menu-item>
      <el-menu-item index="/detail">小二详情 </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "Menu",
  computed: {
    value() {
      return this.$route.path;
    },
  },
  methods: {
    handleSelect(key) {
      this.$router.push(key);
    },
  },
};
</script>

<style lang="scss" scoped>
.menu {
  height: 100%;
  width: 200px;
}
</style>
