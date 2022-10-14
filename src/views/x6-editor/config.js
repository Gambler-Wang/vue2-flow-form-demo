// 画布配置
export const graphConfig = {
  grid: {
    size: 20,
    visible: true,
    type: 'dot',
  },
  panning: {
    enabled: true,
    eventTypes: ['rightMouseDown'],
  },
  mousewheel: {
    enabled: true,
    zoomAtMousePosition: true,
    modifiers: 'ctrl',
    minScale: 0.5,
    maxScale: 3,
  },
  connecting: {
    router: {
      name: 'manhattan',
      args: {
        padding: 1,
      },
    },
    connector: {
      name: 'rounded',
      args: {
        radius: 8,
      },
    },
    anchor: 'center',
    connectionPoint: 'anchor',
    allowBlank: false,
    snap: {
      radius: 20,
    },
  },
  highlighting: {
    magnetAdsorbed: {
      name: 'stroke',
      args: {
        attrs: {
          fill: '#5F95FF',
          stroke: '#5F95FF',
        },
      },
    },
  },
  resizing: true,
  rotating: true,
  selecting: {
    enabled: true,
    rubberband: true,
    showNodeSelectionBox: true,
  },
  snapline: true,
  keyboard: true,
  clipboard: true,
  history: true,
}
// 左侧控件面板配置
export const stencilConfig = {
  title: '流程图',
  stencilGraphWidth: 180,
  stencilGraphHeight: 320,
  collapsable: false,
  // notFoundText: '暂未匹配到结果',
  // search: (cell, keyword, groupName, stencil) => {
  //   if (keyword) {
  //     return cell.label.includes(keyword)
  //   }
  //   return true
  // },
  groups: [
    // {
    //   title: '基础节点',
    //   name: 'group1',
    // },
    // {
    //   title: '图片节点',
    //   name: 'group2',
    //   graphHeight: 250,
    //   layoutOptions: {
    //     rowHeight: 70,
    //   },
    // },
  ],
  layoutOptions: {
    columns: 1,
    columnWidth: 110,
    dx: 30,
    rowHeight: 60,
    center: true,
  },
}
// 链接桩配置
export const portsConfig = {
  groups: {
    top: {
      position: 'top',
      attrs: {
        circle: {
          r: 4,
          magnet: true,
          stroke: '#5F95FF',
          strokeWidth: 1,
          fill: '#fff',
          style: {
            visibility: 'hidden',
          },
        },
      },
    },
    right: {
      position: 'right',
      attrs: {
        circle: {
          r: 4,
          magnet: true,
          stroke: '#5F95FF',
          strokeWidth: 1,
          fill: '#fff',
          style: {
            visibility: 'hidden',
          },
        },
      },
    },
    bottom: {
      position: 'bottom',
      attrs: {
        circle: {
          r: 4,
          magnet: true,
          stroke: '#5F95FF',
          strokeWidth: 1,
          fill: '#fff',
          style: {
            visibility: 'hidden',
          },
        },
      },
    },
    left: {
      position: 'left',
      attrs: {
        circle: {
          r: 4,
          magnet: true,
          stroke: '#5F95FF',
          strokeWidth: 1,
          fill: '#fff',
          style: {
            visibility: 'hidden',
          },
        },
      },
    },
  },
  items: [
    {
      group: 'top',
    },
    {
      group: 'right',
    },
    {
      group: 'bottom',
    },
    {
      group: 'left',
    },
  ],
}
// 实例对象里创建节点
export const loadShape = function (graphObj, stencilObj) {
  const r1 = graphObj.createNode({
    shape: 'custom-rect',
    label: '开始',
    attrs: {
      body: {
        rx: 18,
        ry: 26,
      },
    },
  })
  const r2 = graphObj.createNode({
    shape: 'custom-rect',
    label: '审批',
    data: {
      approveType: '',
      status: '',
    },
  })
  const r3 = graphObj.createNode({
    shape: 'custom-polygon',
    attrs: {
      body: {
        refPoints: '0,10 10,0 20,10 10,20',
      },
    },
    label: '判断',
  })
  const r4 = graphObj.createNode({
    shape: 'custom-circle',
    label: '结束',
  })
  // stencilObj.load([r1, r2, r3, r4], 'group1')
  stencilObj.load([r1, r2, r3, r4])
  // const imageShapes = [
  //   {
  //     label: 'Client',
  //     image: 'https://gw.alipayobjects.com/zos/bmw-prod/687b6cb9-4b97-42a6-96d0-34b3099133ac.svg',
  //   },
  //   {
  //     label: 'Http',
  //     image: 'https://gw.alipayobjects.com/zos/bmw-prod/dc1ced06-417d-466f-927b-b4a4d3265791.svg',
  //   },
  //   {
  //     label: 'Api',
  //     image: 'https://gw.alipayobjects.com/zos/bmw-prod/c55d7ae1-8d20-4585-bd8f-ca23653a4489.svg',
  //   },
  //   {
  //     label: 'Sql',
  //     image: 'https://gw.alipayobjects.com/zos/bmw-prod/6eb71764-18ed-4149-b868-53ad1542c405.svg',
  //   },
  //   {
  //     label: 'Clound',
  //     image: 'https://gw.alipayobjects.com/zos/bmw-prod/c36fe7cb-dc24-4854-aeb5-88d8dc36d52e.svg',
  //   },
  //   {
  //     label: 'Mq',
  //     image: 'https://gw.alipayobjects.com/zos/bmw-prod/2010ac9f-40e7-49d4-8c4a-4fcf2f83033b.svg',
  //   },
  // ]
  // const imageNodes = imageShapes.map((item) =>
  //   graphObj.createNode({
  //     shape: 'custom-image',
  //     label: item.label,
  //     attrs: {
  //       image: {
  //         'xlink:href': item.image,
  //       },
  //     },
  //   })
  // )
  // stencilObj.load(imageNodes, 'group2')
}
