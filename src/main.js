import { createApp } from 'vue'
import router from './router'
import App from './App.vue'

import '/public/css/reset.css'


//这里的createApp后面是可以接受链式调用的  路由
createApp(App).use(router).mount('#app')
