<template>
  <div class="diy-input-container">
    <el-form-item :required="isRequiredBol" :label="labelText">
      <el-input readonly :type="setProps.type" :placeholder="setProps.placeholder" v-model="setProps.defaultValue" />
    </el-form-item>
  </div>
</template>

<script>
export default {
  name: 'DiyInput',
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
