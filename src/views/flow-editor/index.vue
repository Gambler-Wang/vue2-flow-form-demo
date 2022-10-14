<template>
  <div class="flow-editor-container">
    <div class="canvas-container" ref="canvasContainer"></div>
    <Control class="control" v-if="lf" :lf="lf" @catData="catData"></Control>
    <node-panel :lf="lf" :nodeList="nodeList" />
    <el-dialog title="数据" :visible.sync="dialogVisible" width="50%">
      <json-data :graphData="graphData" />
    </el-dialog>
    <el-drawer title="面板属性设置" :visible.sync="drawerVisible" direction="rtl" :before-close="handleClose">
      <drawer-content v-if="drawerVisible" :nodeData="currentClickNode" :lf="lf" @setPropertiesFinish="handleClose" />
    </el-drawer>
  </div>
</template>

<script>
import LogicFlow from '@logicflow/core'
import { DndPanel, SelectionSelect, MiniMap, Menu, InsertNodeInPolyline } from '@logicflow/extension'
import '@logicflow/core/dist/style/index.css'
import '@logicflow/extension/lib/style/index.css'
import Control from './components/control'
import JsonData from '@/components/json-data'
import NodePanel from './components/node-panel'
import DrawerContent from './components/drawer-content'
import { registerNode } from './registerNode'
import { customNode, EditorConfig, testData } from './config.js'
export default {
  name: 'FlowEditor',
  components: {
    Control,
    JsonData,
    NodePanel,
    DrawerContent,
  },
  data() {
    return {
      lf: null,
      dialogVisible: false,
      graphData: null,
      nodeList: customNode,
      drawerVisible: false,
      currentClickNode: null,
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
        plugins: [DndPanel, SelectionSelect, MiniMap, Menu, InsertNodeInPolyline],
      })
      registerNode(this.lf)
      this.lf.render(testData)
      this.lfEvent(this.lf)
    },
    catData() {
      this.graphData = this.lf.getGraphData()
      this.dialogVisible = true
    },
    handleClose() {
      this.drawerVisible = false
    },
    lfEvent(obj) {
      obj.on('node:click', ({ data }) => {
        console.log(data)
        this.currentClickNode = data
        this.drawerVisible = true
      })
      obj.on('edge:click', ({ data }) => {
        console.log('edge:click', data)
        this.currentClickNode = data
        this.drawerVisible = true
      })
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
