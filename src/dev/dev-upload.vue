<template>
  <div>
    <h2>开发测试</h2>
    <hupload :options="options" v-on:receiveUploadMsg="receiveUploadMsg"></hupload>
  </div>
</template>

<script>
import Vue from "vue";
// import hupload from "../plugin/ajax-upload.js";
import hupload from "../../dist/vueAjaxUpload.js"
Vue.use(hupload);
export default {
  data() {
    return {
      options: {
        showProgress: true,
        imagePreview: true,
        url: "https://platform-dev.qms888.com/qmsmicrobusiness/common/file",
        fileUploadName: "ajax-upload",
        limitSize: 1
      }
    };
  },
  components: {},
  methods: {
    receiveUploadMsg(msg) {
      console.log(msg);
    }
  }
};
</script>

<style>

</style>
