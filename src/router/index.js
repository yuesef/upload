import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    
    {
      name: 'devUploadUse',
      path: '/dev-upload-use',
      component: resolve => require(['../dev/dev-upload.vue'], resolve)
    }
  ]
})
