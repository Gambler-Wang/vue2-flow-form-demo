<template>
  <div class="x6-editor">
    <div class="header">
      <Control v-if="graph" :graph="graph" @catData="catData" />
    </div>
    <div id="stencil"></div>
    <div id="canvasContainer" class="canvas-container"></div>
    <div id="miniMap"></div>
    <el-drawer title="面板属性设置" :visible.sync="drawerVisible" direction="rtl" :before-close="handleClose">
      <drawer-content v-if="drawerVisible" :nodeData="currentSelectNode" @setPropertiesFinish="handleClose" />
    </el-drawer>
    <el-dialog title="数据" :visible.sync="dialogVisible" width="50%">
      <json-data :graphData="graphData" />
    </el-dialog>
  </div>
</template>

<script>
import { Graph } from './registerNode/index'
import { Shape, Addon } from '@antv/x6'
import { loadShape, graphConfig, stencilConfig } from './config'
import '@antv/x6-vue-shape'
// import NodeConfigContainer from './components/NodeConfigContainer'
// import EdgeConfigContainer from './components/EdgeConfigContainer'
import Control from './components/control'
import DrawerContent from './components/drawer-content'
import JsonData from '@/components/json-data'
import { testData } from './testData'
export default {
  name: 'X6Editor',
  components: {
    Control,
    DrawerContent,
    JsonData
    // 'sketch-picker': Sketch
  },
  data() {
    return {
      graph: null,
      stencil: null,
      drawerVisible: false,
      dialogVisible: false,
      currentSelectNode: null,
      graphData: null
    }
  },
  mounted() {
    this.initGraph()
    this.initStencil()
    loadShape(this.graph, this.stencil)
    this.graphOnEvent()
    this.graphBindKey()
    this.graph.fromJSON(testData)
  },
  methods: {
    handleClose() {
      this.drawerVisible = false
    },
    catData() {
      this.graphData = this.graph.toJSON()
      this.dialogVisible = true
    },
    initGraph() {
      this.graph = new Graph({
        container: document.getElementById('canvasContainer'),
        minimap: {
          enabled: true,
          container: document.getElementById('miniMap'),
          height: 300,
          width: 220,
        },
        ...graphConfig,

        createEdge() {
          return new Shape.Edge({
            attrs: {
              line: {
                stroke: '#A2B1C3',
                strokeWidth: 2,
                targetMarker: {
                  name: 'block',
                  width: 12,
                  height: 8,
                },
              },
            },
            zIndex: 0,
          })
        },
        validateConnection({ targetMagnet }) {
          return !!targetMagnet
        },
      })
    },
    // 初始化左侧流程控件面板
    initStencil() {
      this.stencil = new Addon.Stencil({
        target: this.graph,
        ...stencilConfig,
      })
      document.getElementById('stencil').appendChild(this.stencil.container)
    },
    // 画布绑定监听事件
    graphOnEvent() {
      // 控制连接桩显示/隐藏
      const showPorts = (ports, show) => {
        for (let i = 0, len = ports.length; i < len; i = i + 1) {
          ports[i].style.visibility = show ? 'visible' : 'hidden'
        }
      }
      this.graph.on('node:mouseenter', () => {
        const container = document.getElementById('canvasContainer')
        const ports = container.querySelectorAll('.x6-port-body')
        showPorts(ports, true)
      })
      this.graph.on('node:mouseleave', () => {
        const container = document.getElementById('canvasContainer')
        const ports = container.querySelectorAll('.x6-port-body')
        showPorts(ports, false)
      })
      // 监听点击画布的节点
      this.graph.on('node:click', ({ e, x, y, node, view }) => {
        this.currentSelectNode = node
        // this.isNode = true
        this.drawerVisible = true
        console.log('node:click')
      })
      // 监听画布添加节点动作
      this.graph.on('node:added', ({ node, index, options }) => {
        // this.currentSelectNode = node
        // this.isNode = true
        // todo 监听到画布添加了node之后，调后端接口创建一个接口
        console.log('node:added')
        // console.log(node)
        // console.log(node.attrs.text.fontSize)
        // node.setLabel('xwtest') // 修改label的值
        // console.log('监听到拖入一个控件id：' + node.id)
        // console.log(this.graph.getNodes())
      })
      // 监听画布移除节点动作
      this.graph.on('node:removed', ({ node, index, options }) => {
        // this.currentSelectNode = node
        console.log('node:removed')
        // console.log(node)
      })
      // 监听节点之间连接动作
      this.graph.on('edge:added', ({ edge, index, options }) => {
        this.curEdge = edge
        // todo 监听到连接线动作之后，调后端接口绑定关系
        console.log('edge:added')
        // console.log(edge)
      })
      // 监听点击节点之间连接动作
      this.graph.on('edge:click', ({ e, x, y, edge, view }) => {
        this.currentSelectNode = edge
        this.drawerVisible = true
        console.log('edge:click')
      })
      // 监听节点之间移除连接动作
      this.graph.on('edge:removed', ({ edge, index, options }) => {
        // todo 监听到连接线动作之后，调后端接口绑定关系
        console.log('edge:removed')
        // console.log(edge)
      })
    },
    // 绑定画布快捷键
    graphBindKey() {
      this.graph.bindKey(['meta+c', 'ctrl+c'], () => {
        const cells = this.graph.getSelectedCells()
        if (cells.length) {
          this.graph.copy(cells)
        }
        return false
      })
      this.graph.bindKey(['meta+x', 'ctrl+x'], () => {
        const cells = this.graph.getSelectedCells()
        if (cells.length) {
          this.graph.cut(cells)
        }
        return false
      })
      this.graph.bindKey(['meta+v', 'ctrl+v'], () => {
        if (!this.graph.isClipboardEmpty()) {
          const cells = this.graph.paste({ offset: 32 })
          this.graph.cleanSelection()
          this.graph.select(cells)
        }
        return false
      })
      // undo redo
      this.graph.bindKey(['meta+z', 'ctrl+z'], () => {
        if (this.graph.history.canUndo()) {
          this.graph.history.undo()
        }
        return false
      })
      this.graph.bindKey(['meta+shift+z', 'ctrl+shift+z'], () => {
        if (this.graph.history.canRedo()) {
          this.graph.history.redo()
        }
        return false
      })
      // select all
      this.graph.bindKey(['meta+a', 'ctrl+a'], () => {
        const nodes = this.graph.getNodes()
        if (nodes) {
          this.graph.select(nodes)
        }
      })
      // delete
      this.graph.bindKey('backspace', () => {
        const cells = this.graph.getSelectedCells()
        if (cells.length) {
          this.graph.removeCells(cells)
        }
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.x6-editor {
  width: 100vw;
  height: 100vh;
  padding-top: 40px;
  position: relative;
  display: flex;
  box-sizing: border-box;
  .canvas-container {
    width: 100%;
    height: 100%;
    background-color: #fff;
  }
  .header {
    position: absolute;
    height: 40px;
    width: 100%;
    top: 0;
    left: 0;
    padding: 5px 10px;
    background-color: #fff;
    border-bottom: 1px solid #dfe3e8;
    box-sizing: border-box;
    z-index: 1;
  }
  #stencil {
    width: 180px;
    height: calc(100vh - 64px);
    flex-shrink: 0;
    border-right: 1px solid #dfe3e8;
    position: relative;
    ::v-deep .x6-widget-stencil-content {
      position: relative;
    }
  }
  #miniMap {
    width: 220px;
    height: 300px;
    position: absolute;
    top: 40px;
    right: 0;
    border: 1px solid #dfe3e8;
    box-sizing: border-box;
    overflow: hidden;
  }
}
</style>
