<template>
  <div class="flow-editor-container">
    <div class="canvas-container" ref="canvasContainer"></div>
    <Control class="control" v-if="lf" :lf="lf" @catData="catData"></Control>
    <node-panel :lf="lf" :nodeList="nodeList" />
    <el-dialog title="数据" :visible.sync="dataVisible" width="50%">
      <json-data :graphData="graphData" />
    </el-dialog>
  </div>
</template>

<script>
import LogicFlow from '@logicflow/core'
import { DndPanel, SelectionSelect, Menu, Snapshot, BpmnElement, MiniMap, InsertNodeInPolyline } from '@logicflow/extension'
import '@logicflow/core/dist/style/index.css'
import '@logicflow/extension/lib/style/index.css'
import Control from './components/control.vue'
import JsonData from '@/components/json-data'
import NodePanel from './components/node-panel.vue'
import { toTurboData } from '@/utils/AdpterForTurbo'
import { renderData } from './testData.js'
import { BpmnNode, EditorConfig } from './config'
export default {
  name: 'FlowEditor',
  components: {
    Control,
    JsonData,
    NodePanel,
  },
  data() {
    return {
      lf: null,
      dataVisible: false,
      graphData: null,
      nodeList: BpmnNode,
    }
  },
  mounted() {
    this.initLf()
  },
  methods: {
    initLf() {
      this.lf = new LogicFlow({
        ...EditorConfig,
        container: this.$refs.canvasContainer,
        grid: true,
        plugins: [DndPanel, SelectionSelect, Menu, Snapshot, BpmnElement, MiniMap, InsertNodeInPolyline],
      })
      this.lf.render(renderData);
    },
    catData() {
      this.graphData = this.lf.getGraphData()
      this.dataVisible = true
    },
    catTurboData() {
      const graphData = this.lf.getGraphData()
      // 数据转化为Turbo识别的数据结构
      this.graphData = toTurboData(graphData)
      this.dataVisible = true
    },
  },
}
</script>

<style lang="scss" scope>
.flow-editor-container {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  .canvas-container {
    width: 100%;
    height: 100%;
  }
  .control {
    position: absolute;
    top: 30px;
    right: 50px;
    z-index: 2;
  }
}
</style>
