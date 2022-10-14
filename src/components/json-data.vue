<template>
  <div class="json-data">
    <vue-json-pretty :path="'res'" :data="graphData"> </vue-json-pretty>
  </div>
</template>
<script>
import VueJsonPretty from 'vue-json-pretty'
import 'vue-json-pretty/lib/styles.css'

export default {
  name: 'JsonData',
  props: ['graphData'],
  components: {
    VueJsonPretty
  }
}
</script>
<style scoped>
.json-data{
  height: 500px;
  overflow-y: auto;
}
</style>
