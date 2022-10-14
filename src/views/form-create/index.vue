<template>
  <div class="form-create-container">
    <el-container style="height: 100%">
      <el-header class="header">
        <el-button @click="exportBtn">导出JSON按钮</el-button>
        <el-button @click="importBtn">导入JSON按钮</el-button>
        <el-button @click="previewBtn">预览按钮</el-button>
      </el-header>
      <el-container>
        <el-aside class="left-box">
          <template v-for="(item, index) in menuList">
            <div :key="index">
              <h4>{{ item.title }}</h4>
              <draggable
                class="drag-area tab-box"
                :group="{ name: 'default', pull: 'clone', put: false }"
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
          <div class="_fc-m-drag">
            <component :is="formCreate" :rule="dragForm.rule" :option="form.value" v-model="dragForm.api"></component>
          </div>
        </el-main>
        <el-aside class="right-box">
          <div>
            <ElDivider v-if="showBaseRule">基础配置</ElDivider>
            <component
              :is="formCreate"
              v-show="showBaseRule"
              v-model="baseForm.api"
              :rule="baseForm.rule"
              :option="baseForm.options"
              @change="baseChange"
            ></component>
            <ElDivider>属性配置</ElDivider>
            <component
              :is="formCreate"
              v-model="propsForm.api"
              :rule="propsForm.rule"
              :option="propsForm.options"
              @change="propChange"
              @removeField="propRemoveField"
            ></component>
            <ElDivider v-if="showBaseRule">验证规则</ElDivider>
            <component
              :is="formCreate"
              v-show="showBaseRule"
              v-model="validateForm.api"
              :rule="validateForm.rule"
              :option="validateForm.options"
              @update:value="validateChange"
            ></component>
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
import createMenu from './config/menu'
import Draggable from 'vuedraggable'
import { designerForm } from './config/initFormCreate'
import form from './config/base/form'
import field from './config/base/field'
import validate from './config/base/validate'
import DragBox from './components/DragBox.vue'
import DragTool from './components/DragTool.vue'
import Validate from './components/Validate.vue'
import Required from './components/Required.vue'
import ruleList from './config/rule'
import { upper } from '@/utils/index'
import is, { hasProperty } from '@form-create/utils/lib/type'
import { deepCopy } from '@form-create/utils/lib/deepextend'
import JsonData from '@/components/json-data'
import { testData } from './testData.js'
designerForm.component('DragBox', DragBox)
designerForm.component('DragTool', DragTool)
designerForm.component('Validate', Validate)
designerForm.component('Required', Required)
designerForm.component('draggable', Draggable)
export default {
  name: 'FormCreate',
  components: {
    Draggable,
    JsonData,
    designerForm: designerForm.$form(),
  },
  data() {
    let children = []
    return {
      formCreate: designerForm.$form(),
      menuList: createMenu(),
      moveRule: null,
      addRule: null,
      children,
      activeRule: null,
      cacheProps: {},
      dragForm: {
        rule: this.makeDragRule(children),
        api: {},
      },
      form: {
        rule: form(),
        option: {
          form: {
            labelPosition: 'top',
            size: 'mini',
          },
          submitBtn: false,
        },
        value: {
          form: {
            inline: false,
            hideRequiredAsterisk: false,
            labelPosition: 'right',
            size: 'mini',
            labelWidth: '125px',
            formCreateSubmitBtn: true,
            formCreateResetBtn: false,
          },
          submitBtn: false,
        },
      },
      baseForm: {
        rule: field(),
        api: {},
        options: {
          form: {
            labelPosition: 'top',
            size: 'mini',
          },
          submitBtn: false,
          mounted: (fapi) => {
            fapi.activeRule = this.activeRule
            fapi.setValue(fapi.options.formData || {})
          },
        },
      },
      validateForm: {
        rule: validate(),
        api: {},
        options: {
          form: {
            labelPosition: 'top',
            size: 'mini',
          },
          submitBtn: false,
          mounted: (fapi) => {
            fapi.activeRule = this.activeRule
            fapi.setValue(fapi.options.formData || {})
          },
        },
      },
      propsForm: {
        rule: [],
        api: {},
        options: {
          form: {
            labelPosition: 'top',
            size: 'mini',
          },
          submitBtn: false,
          mounted: (fapi) => {
            fapi.activeRule = this.activeRule
            fapi.setValue(fapi.options.formData || {})
          },
        },
      },
      dataVisible: false,
      graphData: null,
      preview: {
        state: false,
        rule: [],
        option: {},
      },
      showBaseRule: false,
    }
  },
  provide() {
    return {
      fcx: {
        active: null,
      },
      designer: this,
    }
  },
  mounted() {},
  methods: {
    exportBtn() {
      this.dataVisible = true
      this.graphData = this.getRule()
    },
    importBtn() {
      this.preview.state = true
      this.preview.rule = testData
    },
    previewBtn() {
      this.preview.state = true
      this.preview.rule = this.getRule()
      this.preview.option = this.getOption()
      console.log(this.preview)
    },
    getRule() {
      return this.parseRule(deepCopy(this.dragForm.api.rule[0].children))
    },
    parseRule(children) {
      return [...children].reduce((initial, rule) => {
        if (is.String(rule)) {
          initial.push(rule)
          return initial
        } else if (rule.type === 'DragBox') {
          initial.push(...this.parseRule(rule.children))
          return initial
        } else if (rule.type === 'DragTool') {
          rule = rule.children[0]
          if (rule.type === 'DragBox') {
            initial.push(...this.parseRule(rule.children))
            return initial
          }
        }
        if (!rule) return initial
        rule = { ...rule }
        if (rule.children.length) {
          rule.children = this.parseRule(rule.children)
        }

        delete rule._id
        if (rule.config) {
          delete rule.config.config
        }
        if (rule.effect) {
          delete rule.effect._fc
          delete rule.effect._fc_tool
        }
        if (rule._control) {
          rule.control = rule._control
          delete rule._control
        }
        Object.keys(rule)
          .filter(
            (k) =>
              (Array.isArray(rule[k]) && rule[k].length === 0) ||
              (is.Object(rule[k]) && Object.keys(rule[k]).length === 0)
          )
          .forEach((k) => {
            delete rule[k]
          })
        initial.push(rule)
        return initial
      }, [])
    },
    getOption() {
      const option = deepCopy(this.form.value)
      option.submitBtn = option.form.formCreateSubmitBtn
      option.resetBtn = option.form.formCreateResetBtn
      delete option.form.formCreateSubmitBtn
      delete option.form.formCreateResetBtn
      return option
    },
    makeDragRule(children) {
      return [
        this.makeDrag(
          true,
          'draggable',
          children,
          {
            add: (inject, evt) => this.dragAdd(children, evt),
            end: (inject, evt) => this.dragEnd(children, evt),
            start: (inject, evt) => this.dragStart(children, evt),
            unchoose: (inject, evt) => this.dragUnchoose(children, evt),
          },
          {
            props: {
              name: 'fade',
              tag: 'div',
            },
          }
        ),
      ]
    },
    makeDrag(group, tag, children, on, subRule) {
      return {
        type: 'DragBox',
        wrap: {
          show: false,
        },
        col: {
          show: false,
        },
        inject: true,
        props: {
          rule: {
            props: {
              tag: 'el-col',
            },
            attrs: {
              group: group === true ? 'default' : group,
              ghostClass: 'ghost',
              animation: 150,
              handle: '._fc-drag-btn',
              emptyInsertThreshold: 0,
              direction: 'vertical',
            },
          },
          subRule: subRule || {
            props: {
              name: 'fade',
              tag: 'div',
            },
          },
          tag,
        },
        children,
        on,
      }
    },
    baseChange(field, value, _, fapi) {
      if (this.activeRule && fapi[this.activeRule._id] === this.activeRule) {
        this.$set(this.activeRule, field, value)
      }
    },
    propRemoveField(field, _, fapi) {
      if (this.activeRule && fapi[this.activeRule._id] === this.activeRule) {
        this.dragForm.api.sync(this.activeRule)
        if (field.indexOf('formCreate') === 0) {
          field = field.replace('formCreate', '')
          if (!field) return
          field = lower(field)
          if (field.indexOf('effect') === 0 && field.indexOf('>') > -1) {
            this.$delete(this.activeRule.effect, field.split('>')[1])
          } else if (field.indexOf('props') === 0 && field.indexOf('>') > -1) {
            this.$delete(this.activeRule.props, field.split('>')[1])
          } else if (field === 'child') {
            this.$delete(this.activeRule.children, 0)
          } else if (field) {
            this.$set(this.activeRule, field, undefined)
          }
        } else {
          this.$delete(this.activeRule.props, field)
        }
      }
    },
    propChange(field, value, _, fapi) {
      if (this.activeRule && fapi[this.activeRule._id] === this.activeRule) {
        if (field.indexOf('formCreate') === 0) {
          field = field.replace('formCreate', '')
          if (!field) return
          field = lower(field)
          if (field.indexOf('effect') === 0 && field.indexOf('>') > -1) {
            this.$set(this.activeRule.effect, field.split('>')[1], value)
          } else if (field.indexOf('props') === 0 && field.indexOf('>') > -1) {
            this.$set(this.activeRule.props, field.split('>')[1], value)
          } else if (field === 'child') {
            this.$set(this.activeRule.children, 0, value)
          } else {
            this.$set(this.activeRule, field, value)
          }
        } else {
          this.$set(this.activeRule.props, field, value)
        }
      }
    },
    validateChange(formData) {
      if (!this.activeRule || this.validateForm.api[this.activeRule._id] !== this.activeRule) return
      this.activeRule.validate = formData.validate || []
      this.dragForm.api.refreshValidate()
      this.dragForm.api.nextTick(() => {
        this.dragForm.api.clearValidateState(this.activeRule.field)
      })
    },
    dragStart(children) {
      this.moveRule = children
      this.added = false
    },
    dragUnchoose(children, evt) {
      this.addRule = {
        children,
        oldIndex: evt.oldIndex,
      }
    },
    dragAdd(children, evt) {
      const newIndex = evt.newIndex
      const menu = evt.item._underlying_vm_
      if (!menu) {
        if (this.addRule) {
          const rule = this.addRule.children.splice(this.addRule.oldIndex, 1)
          children.splice(newIndex, 0, rule[0])
        }
      } else {
        const rule = this.makeRule(ruleList[menu.name])
        children.splice(newIndex, 0, rule)
      }
      this.added = true
    },
    dragEnd(children, { newIndex, oldIndex }) {
      if (!this.added && !(this.moveRule === children && newIndex === oldIndex)) {
        const rule = this.moveRule.splice(oldIndex, 1)
        children.splice(newIndex, 0, rule[0])
      }
      this.moveRule = null
      this.addRule = null
      this.added = false
    },
    getParent(rule) {
      let parent = rule.__fc__.parent.rule
      const config = parent.config
      if (config && config.config.inside) {
        rule = parent
        parent = parent.__fc__.parent.rule
      }
      return { root: parent, parent: rule }
    },
    clearActiveRule() {
      this.activeRule = null
      this.activeTab = 'form'
    },
    toolActive(rule) {
      console.log(rule)
      if (this.activeRule) {
        delete this.propsForm.api[this.activeRule._id]
        delete this.baseForm.api[this.activeRule._id]
        delete this.validateForm.api[this.activeRule._id]
      }
      this.activeRule = rule

      this.$nextTick(() => {
        this.activeTab = 'props'
        this.$nextTick(() => {
          this.propsForm.api[this.activeRule._id] = this.activeRule
          this.baseForm.api[this.activeRule._id] = this.activeRule
          this.validateForm.api[this.activeRule._id] = this.activeRule
        })
      })

      if (!this.cacheProps[rule._id]) {
        this.cacheProps[rule._id] = rule.config.config.props(rule)
      }
      this.propsForm.rule = this.cacheProps[rule._id]
      const formData = { ...rule.props, formCreateChild: rule.children[0] }
      Object.keys(rule).forEach((k) => {
        if (['effect', 'config', 'payload', 'id', 'type'].indexOf(k) < 0) formData['formCreate' + upper(k)] = rule[k]
      })
      ;['props', 'effect'].forEach((name) => {
        rule[name] &&
          Object.keys(rule[name]).forEach((k) => {
            formData['formCreate' + upper(name) + '>' + k] = rule[name][k]
          })
      })
      this.propsForm.options.formData = formData

      this.showBaseRule = hasProperty(rule, 'field') && rule.input !== false

      if (this.showBaseRule) {
        this.baseForm.options.formData = {
          field: rule.field,
          title: rule.title || '',
          info: rule.info,
          _control: rule._control,
        }

        this.validateForm.options.formData = { validate: rule.validate ? [...rule.validate] : [] }
      }
    },
    makeRule(config, _rule) {
      const rule = _rule || config.rule()
      rule.config = { config }
      if (!rule.effect) rule.effect = {}
      rule.effect._fc = true
      rule._fc_drag_tag = config.name
      let drag
      if (config.drag) {
        const children = []
        rule.children.push(
          (drag = this.makeDrag(config.drag, rule.type, children, {
            end: (inject, evt) => this.dragEnd(inject.self.children, evt),
            add: (inject, evt) => this.dragAdd(inject.self.children, evt),
            start: (inject, evt) => this.dragStart(inject.self.children, evt),
            unchoose: (inject, evt) => this.dragUnchoose(inject.self.children, evt),
          }))
        )
      }
      if (config.children && !_rule) {
        const child = this.makeRule(ruleList[config.children])
        ;(drag || rule).children.push(child)
      }
      const mask = this.mask !== undefined ? this.mask !== false : config.mask !== false
      if (config.inside) {
        rule.children = [
          {
            type: 'DragTool',
            props: {
              dragBtn: config.dragBtn !== false,
              children: config.children,
              mask,
            },
            effect: {
              _fc_tool: true,
            },
            inject: true,
            on: {
              delete: ({ self }) => {
                const parent = this.getParent(self).parent
                parent.__fc__.rm()
                this.$emit('delete', parent)
                this.clearActiveRule()
              },
              add: ({ self }) => {
                const top = this.getParent(self)
                this.$emit('add', top.parent)
                top.root.children.splice(
                  top.root.children.indexOf(top.parent) + 1,
                  0,
                  this.makeRule(top.parent.config.config)
                )
              },
              addChild: ({ self }) => {
                const top = this.getParent(self)
                const config = top.parent.config.config
                const item = ruleList[config.children]
                if (!item) return
                ;(!config.drag ? top.parent : top.parent.children[0]).children[0].children.push(this.makeRule(item))
              },
              copy: ({ self }) => {
                const top = this.getParent(self)
                this.$emit('copy', top.parent)
                top.root.children.splice(
                  top.root.children.indexOf(top.parent) + 1,
                  0,
                  designerForm.copyRule(top.parent)
                )
              },
              active: ({ self }) => {
                const top = this.getParent(self)
                this.$emit('active', top.parent)
                this.toolActive(top.parent)
              },
            },
            children: rule.children,
          },
        ]
        return rule
      } else {
        return {
          type: 'DragTool',
          props: {
            dragBtn: config.dragBtn !== false,
            children: config.children,
            mask,
          },
          effect: {
            _fc_tool: true,
          },
          inject: true,
          on: {
            delete: ({ self }) => {
              this.$emit('delete', self.children[0])
              self.__fc__.rm()
              this.clearActiveRule()
            },
            add: ({ self }) => {
              this.$emit('add', self.children[0])
              const top = this.getParent(self)
              top.root.children.splice(
                top.root.children.indexOf(top.parent) + 1,
                0,
                this.makeRule(self.children[0].config.config)
              )
            },
            addChild: ({ self }) => {
              const config = self.children[0].config.config
              const item = ruleList[config.children]
              if (!item) return
              ;(!config.drag ? self : self.children[0]).children[0].children.push(this.makeRule(item))
            },
            copy: ({ self }) => {
              this.$emit('copy', self.children[0])
              const top = this.getParent(self)
              top.root.children.splice(top.root.children.indexOf(top.parent) + 1, 0, designerForm.copyRule(top.parent))
            },
            active: ({ self }) => {
              this.$emit('active', self.children[0])
              this.toolActive(self.children[0])
            },
          },
          children: [rule],
        }
      }
    },
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
    height: 100%;
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
  ._fc-m-drag {
    overflow: auto;
    padding: 2px;
    box-sizing: border-box;
  }
  .drag-area {
    height: 100%;
  }
  ._fc-m-drag,
  .draggable-drag {
    background: #fff;
    height: 100%;
    position: relative;
  }
  ._fc-m-drag > form,
  ._fc-m-drag > form > .el-row {
    height: 100%;
  }
  .drag-box {
    min-height: 60px;
  }
}
</style>
