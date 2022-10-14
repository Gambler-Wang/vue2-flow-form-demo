export const customNode = [
  {
    type: 'apply',
    text: '申请',
    style: {
      width: '46px',
      height: '46px',
      borderRadius: '23px',
      border: '2px solid #FF6347',
    },
    property: {
      username: '',
      time: '',
      startTime: '',
      endTime: '',
    },
  },
  {
    type: 'approver',
    text: '审批',
    style: {
      width: '50px',
      height: '40px',
      borderRadius: '4px',
      border: '2px solid #333333',
    },
    property: {
      username: '',
      time: '',
      startTime: '',
      endTime: '',
    },
  },
  {
    type: 'judgement',
    text: '判断',
    style: {
      width: '30px',
      height: '30px',
      border: '2px solid #6495ED',
      transform: 'rotate(45deg)',
    },
    property: {
      username: '',
      time: '',
      startTime: '',
      endTime: '',
    },
  },
  {
    type: 'finish',
    text: '结束',
    style: {
      width: '30px',
      height: '30px',
      borderRadius: '15px',
      border: '2px solid #FF6347',
    },
    property: {
      username: '',
      time: '',
      startTime: '',
      endTime: '',
    },
  },
]
// 主题
export const themeApprove = {
  rect: {
    // 矩形样式
    radius: 8,
    stroke: '#333333',
  },
  circle: {
    r: 25,
    stroke: '#FF6347',
  },
  polygon: {
    stroke: '#6495ED',
  },
  polyline: {
    strokeWidth: 1,
  },
  edgeText: {
    background: {
      fill: 'white',
    },
  },
}
// 编辑器配置
export const EditorConfig = {
  grid: true,
  background: {
    color: '#f7f9ff',
  },
  keyboard: {
    enabled: true,
  },
  style: themeApprove,
}

export const testData = {
  nodes: [
    {
      id: '21aa8393-6297-44cb-8cd1-1ded22a06bd8',
      type: 'apply',
      x: 680,
      y: 420,
      properties: {},
      text: {
        x: 680,
        y: 420,
        value: '请假申请',
      },
    },
    {
      id: '501a9bf2-cc55-45d8-b3db-e79750f5045b',
      type: 'approver',
      x: 880,
      y: 420,
      properties: {
        labelColor: '#000000',
        approveTypeLabel: '',
        approveType: '',
      },
      text: {
        x: 880,
        y: 420,
        value: '组长审批',
      },
    },
    {
      id: '2923c9df-c9d2-4fee-911d-e6816f7f361f',
      type: 'judgement',
      x: 1080,
      y: 420,
      properties: {
        api: '',
      },
      text: {
        x: 1080,
        y: 420,
        value: '请假时间<1天',
      },
    },
    {
      id: '8875ef7e-920b-4b53-b99a-c877d7dcb8e2',
      type: 'finish',
      x: 1340,
      y: 420,
      properties: {},
      text: {
        x: 1340,
        y: 420,
        value: '结束',
      },
    },
    {
      id: '76cbc6db-b833-4c9e-b5b2-c3c4f5e2fe5e',
      type: 'approver',
      x: 1220,
      y: 260,
      properties: {
        labelColor: '#000000',
        approveTypeLabel: '',
        approveType: '',
      },
      text: {
        x: 1220,
        y: 260,
        value: '部门经理审批',
      },
    },
  ],
  edges: [
    {
      id: '8793c763-b4d1-499a-99ec-3167b8443886',
      type: 'polyline',
      sourceNodeId: '21aa8393-6297-44cb-8cd1-1ded22a06bd8',
      targetNodeId: '501a9bf2-cc55-45d8-b3db-e79750f5045b',
      startPoint: {
        x: 730,
        y: 420,
      },
      endPoint: {
        x: 830,
        y: 420,
      },
      properties: {},
      pointsList: [
        {
          x: 730,
          y: 420,
        },
        {
          x: 830,
          y: 420,
        },
      ],
    },
    {
      id: 'c320cc22-5cca-4f95-8294-98767599623d',
      type: 'polyline',
      sourceNodeId: '501a9bf2-cc55-45d8-b3db-e79750f5045b',
      targetNodeId: '2923c9df-c9d2-4fee-911d-e6816f7f361f',
      startPoint: {
        x: 930,
        y: 420,
      },
      endPoint: {
        x: 1045,
        y: 420,
      },
      properties: {},
      text: {
        x: 993,
        y: 420,
        value: '通过',
      },
      pointsList: [
        {
          x: 930,
          y: 420,
        },
        {
          x: 1045,
          y: 420,
        },
      ],
    },
    {
      id: 'b9a0932b-8284-46ac-8fc6-55e533d1c029',
      type: 'polyline',
      sourceNodeId: '501a9bf2-cc55-45d8-b3db-e79750f5045b',
      targetNodeId: '8875ef7e-920b-4b53-b99a-c877d7dcb8e2',
      startPoint: {
        x: 880,
        y: 460,
      },
      endPoint: {
        x: 1340,
        y: 470,
      },
      properties: {},
      text: {
        x: 1121,
        y: 500,
        value: '驳回',
      },
      pointsList: [
        {
          x: 880,
          y: 460,
        },
        {
          x: 880,
          y: 500,
        },
        {
          x: 1340,
          y: 500,
        },
        {
          x: 1340,
          y: 470,
        },
      ],
    },
    {
      id: '82c42b92-02fe-4c0b-86b6-e784e2431037',
      type: 'polyline',
      sourceNodeId: '2923c9df-c9d2-4fee-911d-e6816f7f361f',
      targetNodeId: '8875ef7e-920b-4b53-b99a-c877d7dcb8e2',
      startPoint: {
        x: 1115,
        y: 420,
      },
      endPoint: {
        x: 1290,
        y: 420,
      },
      properties: {},
      text: {
        x: 1192,
        y: 420,
        value: '是',
      },
      pointsList: [
        {
          x: 1115,
          y: 420,
        },
        {
          x: 1290,
          y: 420,
        },
      ],
    },
    {
      id: '40312fa9-faa6-4bbe-b75d-142339528ede',
      type: 'polyline',
      sourceNodeId: '2923c9df-c9d2-4fee-911d-e6816f7f361f',
      targetNodeId: '76cbc6db-b833-4c9e-b5b2-c3c4f5e2fe5e',
      startPoint: {
        x: 1080,
        y: 385,
      },
      endPoint: {
        x: 1170,
        y: 260,
      },
      properties: {},
      text: {
        x: 1080,
        y: 292,
        value: '否',
      },
      pointsList: [
        {
          x: 1080,
          y: 385,
        },
        {
          x: 1080,
          y: 260,
        },
        {
          x: 1170,
          y: 260,
        },
      ],
    },
    {
      id: '50113e9f-f423-4f90-b46a-2d977617f7dc',
      type: 'polyline',
      sourceNodeId: '76cbc6db-b833-4c9e-b5b2-c3c4f5e2fe5e',
      targetNodeId: '8875ef7e-920b-4b53-b99a-c877d7dcb8e2',
      startPoint: {
        x: 1270,
        y: 260,
      },
      endPoint: {
        x: 1340,
        y: 370,
      },
      properties: {},
      pointsList: [
        {
          x: 1270,
          y: 260,
        },
        {
          x: 1340,
          y: 260,
        },
        {
          x: 1340,
          y: 370,
        },
      ],
    },
  ],
}
