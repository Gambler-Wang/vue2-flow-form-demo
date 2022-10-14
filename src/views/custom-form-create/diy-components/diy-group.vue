<template>
  <div class="diy-group-container">
    <p>{{setProps.label}}</p>
    <div class="line"></div>
  </div>
</template>

<script>
export default {
  name: 'DiyGroup',
  props:{
    setProps:{
      type: Object,
      default: () => {
        return {
          label: '',
        }
      }
    }
  },
}
</script>


<style lang="scss" scope>
.diy-group-container {
  width: 100%;
  position: relative;
  padding:0 20px;
  box-sizing: border-box;
  overflow: hidden;
  p{
    height: 30px;
    line-height: 30px;
    font-size: 14px;
  }
  .line{
    position: absolute;
    width: 5px;
    height: 30px;
    background: blue;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
  }
}
</style>
