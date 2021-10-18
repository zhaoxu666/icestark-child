<template>
  <div>
    <div>小二：自定义1-详情页面</div>
    <router-link to="/">home</router-link>
    <br />
    <router-link to="/list">list</router-link>
    <router-link to="">跳转到商家平台</router-link>
    <div>
      <p v-for="(errorLog, index) in errorLogs" :key="index">
        <span>{{errorLog.error}}----{{errorLog.vm}}----{{errorLog.info}}----{{errorLog.url}}</span>
      </p>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Detail',
  computed: {
   ...mapGetters([
      'errorLogs'
    ])
  }
  
}
</script>