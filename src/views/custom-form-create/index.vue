<template>
  <div class="form-create-container">
    <el-container style="height: 100%">
      <el-header class="header">
        <el-button @click="exportBtn">导出JSON按钮</el-button>
        <el-button @click="importBtn">导入JSON按钮</el-button>
        <el-button @click="previewBtn">预览按钮</el-button>
        <!-- <el-button @click="addRowCol([8,8,8])">一行三列</el-button>
        <el-button @click="addRowCol([12,12])">一行二列</el-button> -->
      </el-header>
      <el-container>
        <el-aside class="left-box">
          <template v-for="(item, index) in menuList">
            <div :key="index">
              <h4>{{ item.title }}</h4>
              <draggable
                class="drag-area tab-box"
                :group="{ name: 'dragBox', pull: 'clone', put: false }"
                :sort="false"
                :list="item.list"
              >
                <div class="widget-box" v-for="(data, index) in item.list" :key="index">
                  <i class="fc-icon" :class="data.icon || 'icon-input'"></i>
                  <span>{{ data.label }}</span>
                </div>
              </draggable>
            </div>
          </template>
        </el-aside>
        <el-main>
          <div class="main-box">
            <el-form label-position="top" class="drag-form" ref="form" :label-width="formLabelWidth + 'px'">
              <draggable
                class="drag-area"
                :list="dragBoxList"
                :group="{ name: 'dragBox' }"
                @change="dragBoxChange"
                filter=".top"
                animation="300"
                ghostClass="ghost"
                 chosenClass="chosen"
              >
                <div
                  v-for="(item, index) in dragBoxList"
                  :key="index"
                  :style="{ width: item.colWidth }"
                  :class="currentChooseIndex === index ? 'item-box active' : 'item-box'"
                  @click.stop="chooseCurrentCard(index)"
                >
                  <component :is="item.name" :setProps="item.props"></component>
                  <div v-if="currentChooseIndex === index" class="btn-box">
                    <el-button @click.stop="deleteCard(index)">删除</el-button>
                    <el-button @click.stop="copyCard(index)">复制</el-button>
                  </div>
                </div>
              </draggable>
            </el-form>
          </div>
        </el-main>
        <el-aside class="right-box">
          <div v-if="currentChooseItem">
            <set-config :key="currentChooseItem.id" :setConfigProps="currentChooseItem.props" />
          </div>
        </el-aside>
      </el-container>
    </el-container>
    <el-dialog title="数据" :visible.sync="dataVisible" width="50%">
      <json-data :graphData="graphData" />
    </el-dialog>
    <el-dialog :visible.sync="preview.state" width="800px" append-to-body>
      <designer-form :rule="preview.rule" v-if="preview.state"></designer-form>
    </el-dialog>
  </div>
</template>

<script>
import Draggable from 'vuedraggable'
import JsonData from '@/components/json-data'
import createMenu from './config/menu'
import ComponentList from './diy-components/index.js'
import SetConfig from './components/set-config.vue'
import cloneDeep from 'lodash/cloneDeep'
import { uniqueId } from '@/utils/index'
export default {
  name: 'CustomFormCreate',
  components: {
    Draggable,
    JsonData,
    SetConfig,
    ...ComponentList,
  },
  data() {
    return {
      menuList: createMenu(),
      currentChooseIndex: null,
      currentChooseItem: null,
      formLabelWidth: 120,
      form: {},
      dataVisible: false,
      preview: {
        state: false,
        rule: {},
        option: {},
      },
      dragBoxList: [],
      rows: [],
      graphData: [],
    }
  },
  mounted() {
    console.log(this.ComponentList)
    // document.addEventListener('click', this.removeActive)
  },
  methods: {
    exportBtn() {
      this.dataVisible = true
      // this.graphData = this.getRule()
    },
    importBtn() {
      this.preview.state = true
      // this.preview.rule = testData
    },
    previewBtn() {
      this.preview.state = true
      // this.preview.rule = this.getRule()
      // this.preview.option = this.getOption()
      console.log(this.preview)
    },
    removeActive() {
      if (Object.prototype.toString.call(this.currentChooseIndex) !== '[object Null]') {
        this.currentChooseIndex = null
        this.currentChooseItem = null
      }
    },
    chooseCurrentCard(index) {
      this.currentChooseIndex = index
      this.currentChooseItem = this.dragBoxList[index]
      console.log(this.currentChooseItem)
    },
    deleteCard(index) {
      this.dragBoxList.splice(index, 1)
      this.currentChooseIndex = null
      this.currentChooseItem = null
    },
    copyCard(index) {
      const deep = cloneDeep(this.dragBoxList[index])
      deep.id = uniqueId(deep.name)
      this.dragBoxList.splice(index, 0, this.dragBoxList[index])
    },
    dragBoxChange(e) {
      if (e.added) {
        const deep = cloneDeep(e.added.element)
        deep.id = uniqueId(deep.name)
        this.dragBoxList.splice(e.added.newIndex, 1, deep)
      }
      console.log(111, e)
      console.log(111, this.dragBoxList)
    },
    addRow(cols = [6, 6, 6, 6]) {
      const newRow = {
        zones: [],
      }
      cols.forEach((colsSize) => {
        newRow.zones.push({
          size: colsSize,
          widgets: [],
        })
      })
      this.rows.push(newRow)
    },
  },
  beforeDestroy() {
    // document.removeEventListener('click', this.removeActive)
  },
}
</script>

<style lang="scss" scope>
.form-create-container {
  height: 100vh;
  width: 100vw;

  .header {
    border: 1px solid #474040;
    box-sizing: border-box;
    border-left: none;
    border-right: none;
    border-top: none;
  }
  .left-box {
    border: 1px solid #474040;
    width: 300px;
    border-top: none;
    border-bottom: none;
    border-left: none;
    box-sizing: border-box;
    .tab-box {
      padding: 10px;
      display: flex;
      flex-wrap: wrap;
      .widget-box {
        padding: 8px 12px;
        margin-right: 8px;
        box-sizing: border-box;
        border: 1px solid #474040;
        display: flex;
        align-items: center;
        justify-content: center;
        span {
          margin-left: 8px;
        }
      }
    }
  }
  .main-box {
    width: 100%;
    height: 100%;
    .drag-form {
      width: 100%;
      height: 100%;
      .drag-area {
        width: 100%;
        min-height: 120px;
        display: flex;
        flex-wrap: wrap;
        transition: all 0.3s;
        border:1px solid #e0e0e0;
        &>div{
          // width: 50%;
        }
        .item-box {
          height: auto;
          padding: 0 18px;
          box-sizing: border-box;
          position: relative;
          border:1px dotted transparent;
          &.active {
            border: 1px solid red;
          }
          .btn-box{
            position: absolute;
            right: 0;
            top: 0;
          }
        }
      }
    }
  }
  .right-box {
    border: 1px solid #474040;
    width: 300px;
    height: calc(100vh - 60px);
    flex-shrink: 0;
    box-sizing: border-box;
    border-top: none;
    border-bottom: none;
    border-right: none;
    padding: 0 20px;
    overflow: auto;
  }
  .ghost,.chosen {
    content: '';
    font-size: 0;
    height: 3px;
    box-sizing: border-box;
    background: rgba(0,0,0,.2);
    border: 2px solid #000;
    outline-width: 0;
    padding: 0;
    height: 100%;
  }
}
</style>
