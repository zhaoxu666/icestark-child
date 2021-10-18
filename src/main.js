import Vue from 'vue';
import { isInIcestark, setLibraryName } from '@ice/stark-app';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './styles/global.scss';
import App from './App.vue';
import router from './router';
import store from './store'
Vue.use(ElementUI);

Vue.config.productionTip = false;

let vue = null;

// 判断是否在stark环境中：
console.log(`是否在stark环境中：${isInIcestark()}`)

// set in vue.config.js
setLibraryName('icestark-vue-demo');
export function mount(props) {
  const { container } = props;
  vue = new Vue({
    router,
    store,
    mounted: () => {
      console.log('App mounted');
    },
    destroyed: () => {
      console.log('App destroyed');
    },
    render: h => h(App),
  }).$mount();

  // for vue don't replace mountNode
  container.innerHTML = '';
  container.appendChild(vue.$el);
}

export function unmount() {
  if (vue) vue.$destroy();
  vue.$el.innerHTML = '';
  vue = null;
}

if (!isInIcestark()) {
  // 初始化 vue 项目
  // eslint-disable-next-line no-new
  new Vue({
    router,
    store,
    el: '#app',
    mounted: () => {
      console.log('App mounted');
    },
    destroyed: () => {
      console.log('App destroyed');
    },
    render: h => h(App),
  });
}
