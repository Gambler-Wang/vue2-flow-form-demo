<template>
  <div class="diy-input-container">
    <el-form-item :required="isRequiredBol" :label="labelText">
      <el-select :placeholder="setProps.placeholder" v-model="setProps.defaultValue">
          <el-option v-for="(item, index) of setProps.candidateValue.split(',')" :key="index" :label="item" :value="item" /> 
      </el-select>
    </el-form-item>
  </div>
</template>

<script>
export default {
  name: 'DiySelect',
  props: {
    setProps: {
      type: Object,
      default: () => {
        return {
          label: '',
          type: '',
          rightTip: '',
          placeholder: '',
          defaultValue: '',
          isRequired: false,
          candidateValue:'',
          fieldCode:'phone'
        }
      },
    },
  },
  computed: {
    labelText() {
      if (this.setProps.rightTip) {
        return `${this.setProps.label}：(${this.setProps.rightTip})`
      } else {
        return `${this.setProps.label}：`
      }
    },
    isRequiredBol() {
      return this.setProps.isRequired ? true : false
    },
  },
}
</script>

<style lang="scss" scope>
.diy-input-container {
  width: 100%;
  height: 130px;
}
</style>
