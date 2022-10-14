<template>
  <div class="control-container">
    <el-button size="mini" @click="()=>{this.graph.zoom(0.2)}">放大</el-button>
    <el-button size="mini" @click="()=>{this.graph.zoom(-0.2)}">缩小</el-button>
    <el-button size="mini" @click="()=>{this.graph.history.undo()}">上一步</el-button>
    <el-button size="mini" @click="()=>{this.graph.history.redo()}">下一步</el-button>
    <el-button size="mini" @click="()=>{this.graph.clearCells()}">清空画布</el-button>
    <el-button size="mini" @click="catData">查看数据</el-button>
    <el-button size="mini" @click="saveToSvg">导出svg</el-button>
  </div>
</template>

<script>
import { Graph, DataUri } from '@antv/x6'
export default {
  name: 'Control',
  props: {
    graph: Graph
  },
  methods: {
    // 保存成svg图片
    saveToSvg () {
      this.graph.toSVG(dataUri => {
        // 下载
        DataUri.downloadDataUri(DataUri.svgToDataUrl(dataUri), 'chart.svg')
        // }, {
        //   preserveDimensions: {
        //     width: 800,
        //     height: 800
        //   }
        // })
      })
    },
    catData() {
      this.$emit('catData')
    },
  }
}
</script>

<style scoped>
.control-container {
  margin:0;
  box-sizing: border-box;
}
</style>
