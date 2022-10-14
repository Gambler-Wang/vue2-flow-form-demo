<template>
  <div class="node-panel">
    <div class="node-item" v-for="item in nodeList" :key="item.text" @mousedown="dragNode(item)">
      <div class="node-item-icon" :class="item.class">
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
      margin-left: 20px;
      background-size: cover;
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
.bpmn-start {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAAH6ji2bAAAABGdBTUEAALGPC/xhBQAAAnBJREFUOBGdVL1rU1EcPfdGBddmaZLiEhdx1MHZQXApraCzQ7GKLgoRBxMfcRELuihWKcXFRcEWF8HBf0DdDCKYRZpnl7p0svLe9Zzbd29eQhTbC8nv+9zf130AT63jvooOGS8Vf9Nt5zxba7sXQwODfkWpkbjTQfCGUd9gIp3uuPP8bZ946g56dYQvnBg+b1HB8VIQmMFrazKcKSvFW2dQTxJnJdQ77urmXWOMBCmXM2Rke4S7UAW+/8ywwFoewmBps2tu7mbTdp8VMOkIRAkKfrVawalJTtIliclFbaOBqa0M2xImHeVIfd/nKAfVq/LGnPss5Kh00VEdSzfwnBXPUpmykNss4lUI9C1ga+8PNrBD5YeqRY2Zz8PhjooIbfJXjowvQJBqkmEkVnktWhwu2SM7SMx7Cj0N9IC0oQXRo8xwAGzQms+xrB/nNSUWVveI48ayrFGyC2+E2C+aWrZHXvOuz+CiV6iycWe1Rd1Q6+QUG07nb5SbPrL4426d+9E1axKjY3AoRrlEeSQo2Eu0T6BWAAr6COhTcWjRaYfKG5csnvytvUr/WY4rrPMB53Uo7jZRjXaG6/CFfNMaXEu75nG47X+oepU7PKJvvzGDY1YLSKHJrK7vFUwXKkaxwhCW3u+sDFMVrIju54RYYbFKpALZAo7sB6wcKyyrd+aBMryMT2gPyD6GsQoRFkGHr14TthZni9ck0z+Pnmee460mHXbRAypKNy3nuMdrWgVKj8YVV8E7PSzp1BZ9SJnJAsXdryw/h5ctboUVi4AFiCd+lQaYMw5z3LGTBKjLQOeUF35k89f58Vv/tGh+l+PE/wG0rgfIUbZK5AAAAABJRU5ErkJggg==)
    center center no-repeat;
  cursor: grab;
}
.bpmn-end {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAAH6ji2bAAAABGdBTUEAALGPC/xhBQAAA1BJREFUOBFtVE1IVUEYPXOf+tq40Y3vPcmFIdSjIorWoRG0ERWUgnb5FwVhYQSl72oUoZAboxKNFtWiwKRN0M+jpfSzqJAQclHo001tKkjl3emc8V69igP3znzfnO/M9zcDcKT67azmjYWTwl9Vn7Vumeqzj1DVb6cleQY4oAVnIOPb+mKAGxQmKI5CWNJ2aLPatxWa3aB9K7/fB+/Z0jUF6TmMlFLQqrkECWQzOZxYGjTlOl8eeKaIY5yHnFn486xBustDjWT6dG7pmjHOJd+33t0iitTPkK6tEvjxq4h2MozQ6WFSX/LkDUGfFwfhEZj1Auz/U4pyAi5Sznd7uKzznXeVHlI/Aywmk6j7fsUsEuCGADrWARXXwjxWQsUbIupDHJI7kF5dRktg0eN81IbiZXiTESic50iwS+t1oJgL83jAiBupLDCQqwziaWSoAFSeIR3P5Xv5az00wyIn35QRYTwdSYbz8pH8fxUUAtxnFvYmEmgI0wYXUXcCCSpeEVpXlsRhBnCEATxWylL9+EKCAYhe1NGstUa6356kS9NVvt3DU2fd+Wtbm/+lSbylJqsqkSm9CRhvoJVlvKPvF1RKY/FcPn5j4UfIMLn8D4UYb54BNsilTDXKnF4CfTobA0FpoW/LSp306wkXM+XaOJhZaFkcNM82ASNAWMrhrUbRfmyeI1FvRBTpN06WKxa9BK0o2E4Pd3zfBBEwPsv9sQBnmLVbLEIZ/Xe9LYwJu/Er17W6HYVBc7vmuk0xUQ+pqxdom5Fnp55SiytXLPYoMXNM4u4SNSCFWnrVIzKG3EGyMXo6n/BQOe+bX3FClY4PwydVhthOZ9NnS+ntiLh0fxtlUJHAuGaFoVmttpVMeum0p3WEXbcll94l1wM/gZ0Ccczop77VvN2I7TlsZCsuXf1WHvWEhjO8DPtyOVg2/mvK9QqboEth+7pD6NUQC1HN/TwvydGBARi9MZSzLE4b8Ru3XhX2PBxf8E1er2A6516o0w4sIA+lwURhAON82Kwe2iDAC1Watq4XHaGQ7skLcFOtI5lDxuM2gZe6WFIotPAhbaeYlU4to5cuarF1QrcZ/lwrLaCJl66JBocYZnrNlvm2+MBCTmUymPrYZVbjdlr/BxlMjmNmNI3SAAAAAElFTkSuQmCC)
    center center no-repeat;
  cursor: grab;
}
.bpmn-user {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAEFVwZaAAAABGdBTUEAALGPC/xhBQAAAqlJREFUOBF9VM9rE0EUfrMJNUKLihGbpLGtaCOIR8VjQMGDePCgCCIiCNqzCAp2MyYUCXhUtF5E0D+g1t48qAd7CCLqQUQKEWkStcEfVGlLdp/fm3aW2QQdyLzf33zz5m2IsAZ9XhDpyaaIZkTS4ASzK41TFao88GuJ3hsr2pAbipHxuSYyKRugagICGANkfFnNh3HeE2N0b3nN2cgnpcictw5veJIzxmDamSlxxQZicq/mflxhbaH8BLRbuRwNtZp0JAhoplVRUdzmCe/vO27wFuuA3S5qXruGdboy5/PRGFsbFGKo/haRtQHIrM83bVeTrOgNhZReWaYGnE4aUQgTJNvijJFF4jQ8BxJE5xfKatZWmZcTQ+BVgh7s8SgPlCkcec4mGTmieTP4xd7PcpIEg1TX6gdeLW8rTVMVLVvb7ctXoH0Cydl2QOPJBG21STE5OsnbweVYzAnD3A7PVILuY0yiiyDwSm2g441r6rMSgp6iK42yqroI2QoXeJVeA+YeZSa47gZdXaZWQKTrG93rukk/l2Al6Kzh5AZEl7dDQy+JjgFahQjRopSxPbrbvK7GRe9ePWBo1wcU7sYrFZtavXALwGw/7Dnc50urrHJuTPSoO2IMV3gUQGNg87IbSOIY9BpiT9HV7FCZ94nPXb3MSnwHn/FFFE1vG6DTby+r31KAkUktB3Qf6ikUPWxW1BkXSPQeMHHiW0+HAd2GelJsZz1OJegCxqzl+CLVHa/IibuHeJ1HAKzhuDR+ymNaRFM+4jU6UWKXorRmbyqkq/D76FffevwdCp+jN3UAN/C9JRVTDuOxC/oh+EdMnqIOrlYteKSfadVRGLJFJPSB/ti/6K8f0CNymg/iH2gO/f0DwE0yjAFO6l8JaR5j0VPwPwfaYHqOqrCI319WzwhwzNW/aQAAAABJRU5ErkJggg==)
    center center no-repeat;
  cursor: grab;
}
.bpmn-exclusiveGateway {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVCAYAAAHeEJUAAAAABGdBTUEAALGPC/xhBQAAAvVJREFUOBGNVEFrE0EU/mY3bQoiFlOkaUJrQUQoWMGePLX24EH0IIoHKQiCV0G8iE1covgLiqA/QTzVm1JPogc9tIJYFaQtlhQxqYjSpunu+L7JvmUTU3AgmTfvffPNN++9WSA1DO182f6xwILzD5btfAoQmwL5KJEwiQyVbSVZ0IgRyV6PTpIJ81E5ZvqfHQR0HUOBHW4L5Et2kQ6Zf7iAOhTFAA8s0pEP7AXO1uAA52SbqGk6h/6J45LaLhO64ByfcUzM39V7ZiAdS2yCePPEIQYvTUHqM/n7dgQNfBKWPjpF4ISk8q3J4nB11qw6X8l+FsF3EhlkEMfrjIer3wJTLwS2aCNcj4DbGxXTw00JmAuO+Ni6bBxVUCvS5d9aa04+so4pHW5jLTywuXAL7jJ+D06sl82Sgl2JuVBQn498zkc2bGKxULHjCnSMadBKYDYYHAtsby1EQ5lNGrQd4Y3v4Zo0XdGEmDno46yCM9Tk+RiJmUYHS/aXHPNTcjxcbTFna000PFJHIVZ5lFRqRpJWk9/+QtlOUYJj9HG5pVFEU7zqIYDVsw2s+AJaD8wTd2umgSCCyUxgGsS1Y6TBwXQQTFuZaHcd8gAGioE90hlsY+wMcs30RduYtxanjMGal8H5dMW67dmT1JFtYUEe8LiQLRsPZ6IIc7A4J5tqco3T0pnv/4u0kyzrYUq7gASuEyI8VXKvB9Odytv6jS/PNaZBln0nioJG/AVQRZvApOdhjj3Jt8QC8Im09SafwdBdvIpztpxWxpeKCC+EsFdS8DCyuCn2munFpL7ctHKp+Xc5cMybeIyMAN33SPL3ZR9QV1XVwLyzHm6Iv0/yeUuUb7PPlZC4D4HZkeu6dpF4v9j9MreGtMbxMMRLIcjJic9yHi7WQ3yVKzZVWUr5UrViJvn1FfUlwe/KYVfYyWRLSGNu16hR01U9IacajXPei0wx/5BqgInvJN+MMNtNme7ReU9SBbgntovn0kKHpFg7UogZvaZiOue/q1SBo9ktHzQAAAAASUVORK5CYII=)
    center center no-repeat;
  cursor: grab;
}
.bpmn-serviceTask{
  background: url(data:image/png;base64,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)
  center center no-repeat;
  cursor: grab;
}
</style>
