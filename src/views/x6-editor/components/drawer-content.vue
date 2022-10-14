<template>
  <div class="drawer-content">
    <el-form label-width="80px" :model="formData">
      <el-form-item label="node类型">
        <el-input v-model="formData.type" readonly></el-input>
      </el-form-item>
      <el-form-item label="文案">
        <el-input v-model="formData.text"></el-input>
      </el-form-item>
      <template v-if="nodeData.shape === 'custom-rect'">
        <div>自定义属性</div>
        <el-divider></el-divider>
        <el-form-item label="审核节点">
          <el-select v-model="formData.approveType" placeholder="请选择">
            <el-option
              v-for="item in leaderSelectList"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="审核状态">
          <el-select v-model="formData.status" placeholder="请选择">
            <el-option
              v-for="item in checkStatusList"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
      </template>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import { Node } from '@antv/x6'
export default {
  name: 'DrawerContent',
  components: {},
  props: {
    nodeData: Node,
  },
  data() {
    return {
      formData: {
        type: '',
        text: '',
        approveType: '',
        status: '',
      },
      leaderSelectList: [
        {
          label: '直接上级',
          value: 'leader',
        },
        {
          label: 'T3领导',
          value: 't3Leader',
        },
        {
          label: 'T2领导',
          value: 't2Leader',
        },
        {
          label: 'T1领导',
          value: 't1Leader',
        },
      ],
      checkStatusList: [
        {
          label: '通过',
          value: 'pass',
        },
        {
          label: '不通过',
          value: 'reject',
        },
      ],
    }
  },
  mounted() {
    console.log(this.nodeData)
    const { label, shape, data } = this.nodeData
    this.formData = {
      type: shape,
      text: label,
      approveType: data && data.approveType || null,
      status: data && data.status || null,
    }
  },
  methods: {
    onSubmit() {
      if(this.nodeData.isEdge()) {
        this.nodeData.setLabels(this.formData.text)
      }else{
        this.nodeData.setLabel(this.formData.text)
        if(this.formData.approveType || this.formData.status) {
          this.nodeData.setData({
            approveType: this.formData.approveType,
            status: this.formData.status,
          })
        }
      }
      this.$emit('setPropertiesFinish')
    },
  },
}
</script>
<style>
.drawer-content {
  padding: 20px;
}
</style>
