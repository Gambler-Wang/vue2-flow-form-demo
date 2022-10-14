<template>
  <div class="set-config-container">
    <div>字段属性</div>
    <el-form label-position="top" label-width="80px" :model="form" size="small" :rules="rules">
      <el-form-item v-if="isInclude('label')" label="标题">
        <el-input v-model="form.label"></el-input>
      </el-form-item>
      <el-form-item v-if="isInclude('rightTip')" label="提示文字">
        <el-input v-model="form.rightTip"></el-input>
        <p>显示在标题右侧的文字</p>
      </el-form-item>
      <el-form-item v-if="isInclude('placeholder')" label="占位提示">
        <el-input v-model="form.placeholder"></el-input>
      </el-form-item>
      <el-form-item v-if="isInclude('defaultValue')" prop="defaultValue" label="默认值">
        <el-input v-if="setConfigProps.type === 'text'" v-model="form.defaultValue"></el-input>
        <el-input v-if="setConfigProps.type === 'number'" v-model.number="form.defaultValue"></el-input>
      </el-form-item>
      <el-form-item v-if="isInclude('isRequired')">
        <el-checkbox v-model="form.isRequired">设为必填</el-checkbox>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'SetConfig',
  props: {
    setConfigProps: {
      type: Object,
      default: () => {
        return {
          label: '',
          rightTip: '',
          placeholder: '',
          defaultValue: '',
          isRequired: 0,
          type: 'text',
        }
      },
    },
  },
  computed: {
    isInclude() {
      return (name) => {
        return name in this.setConfigProps
      }
    },
  },
  data() {
    return {
      form: {},
      rules: {},
    }
  },
  created() {
    this.form = this.setConfigProps
    this.isNumberType()
  },
  methods: {
    isNumberType() {
      if (this.setConfigProps.type === 'number') {
        this.rules['defaultValue'] = [{ type: 'number', message: '请输入数值' }]
      } else {
        return null
      }
    },
  },
}
</script>

<style lang="scss" scope>
.set-config-container {
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }
}
</style>
