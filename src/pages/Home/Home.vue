<template>
  <div>
    <div>小二：首页9</div>
    <router-link to="/detail">detail</router-link>
    <br />
    <router-link to="/list">list</router-link>
    <br />
    <el-alert title="这是一个 Element 的组件" type="success"> </el-alert>
    <el-button @click="handleClick()">跳转到商家平台</el-button>
    <p>接收父应用传过来的值：{{lang}}</p>
    <el-button @click="handleParent">向父应用传值 'CH'</el-button>
    <el-button @click="setErrorLog">设置错误日志</el-button>
  </div>
</template>

<script>
import { appHistory } from "@ice/stark-app";
import { store, event } from "@ice/stark-data";
export default {
  data() {
    return {
      lang: ''
    }
  },
  methods: {
    handleClick: () => {
      appHistory.push("/seller/list");
    },
    handleParent() {
      store.set('language', 'CH')
       this.lang = 'CH'
    },
    setErrorLog() {
      console.log(this)
      this.$store.dispatch('errorLog/addErrorLog', {
        err: 'error',
        vm: 'Home',
        info: '变量未命名',
        url: window.location.href
      })
    }
  },
  created() {
    store.on(
      "language",
      (lang) => {
        console.log(`current language is ${lang}`);
        this.lang = lang
      },
      true
    );
  },
};
</script>
