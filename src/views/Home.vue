<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" >
    <div>
      <el-button @click="jumpToPage('/flow-editor-bpmn')">跳转至Editor-BPMN</el-button>
      <el-button @click="jumpToPage('/flow-editor')">跳转至Editor</el-button>
      <el-button @click="jumpToPage('/x6-editor')">跳转至x6-Editor</el-button>
    </div>
    <div style="margin-top:20px">
      <!-- <el-button @click="jumpToPage('/swiper-demo')">折叠效果轮播图</el-button> -->
      <el-button @click="jumpToPage('/form-create')">表单设计</el-button>
      <el-button @click="jumpToPage('/custom-form-create')">自定义表单设计</el-button>
      <el-button @click="jumpToPage('/wang-editor')">wangEditor</el-button>
    </div>
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
  },
  methods: {
    jumpToPage(path) {
      this.$router.push(path)
    },
  },
}
</script>
<style lang="scss" scoped>
.home {
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
