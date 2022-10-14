<template>
  <div class="node-panel">
    <div class="node-item" v-for="item in nodeList" :key="item.text" @mousedown="dragNode(item)">
      <div class="node-item-icon" :style="item.style">
        <div v-if="item.type === 'user' || item.type === 'time'" class="shape"></div>
      </div>
      <span class="node-label">{{ item.text }}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'NodePanel',
  props: {
    lf: Object,
    nodeList: Array,
  },
  methods: {
    dragNode(item) {
      this.$props.lf.dnd.startDrag({
        type: item.type,
        text: item.text
      })
    },
  },
}
</script>
<style lang="scss" scope>
.node-panel {
  position: absolute;
  top: 50px;
  left: 50px;
  width: 70px;
  padding: 20px 10px;
  background-color: white;
  box-shadow: 0 0 10px 1px rgb(228, 224, 219);
  border-radius: 6px;
  text-align: center;
  z-index: 101;
  .node-item {
    margin-bottom: 20px;
    .node-item-icon {
      width: 30px;
      height: 30px;
      margin: 0 auto;
      background-size: cover;
      box-sizing: border-box;
      margin-bottom: 8px;
    }
    .node-label {
      font-size: 12px;
      margin-top: 5px;
      user-select: none;
    }
  }
}
</style>
<style>

</style>
