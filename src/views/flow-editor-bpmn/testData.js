export const renderData = {
  nodes: [
    {
      id: 'Event_28948e4',
      type: 'bpmn:startEvent',
      x: 540,
      y: 240,
      properties: {},
      text: {
        x: 540,
        y: 240,
        value: '请假申请',
      },
    },
    {
      id: 'Gateway_0rug0oj',
      type: 'bpmn:exclusiveGateway',
      x: 680,
      y: 240,
      properties: {},
    },
    {
      id: 'Activity_1lvhm7l',
      type: 'bpmn:userTask',
      x: 820,
      y: 180,
      properties: {},
      text: {
        x: 820,
        y: 180,
        value: '领导审批',
      },
    },
    {
      id: 'Activity_0j0f0l5',
      type: 'bpmn:userTask',
      x: 820,
      y: 300,
      properties: {},
      text: {
        x: 820,
        y: 300,
        value: '人事审批',
      },
    },
    {
      id: 'Gateway_1et50le',
      type: 'bpmn:exclusiveGateway',
      x: 980,
      y: 240,
      properties: {},
    },
    {
      id: 'Activity_3nqr8of',
      type: 'bpmn:userTask',
      x: 1140,
      y: 240,
      properties: {},
      text: {
        x: 1140,
        y: 240,
        value: '人事审批',
      },
    },
    {
      id: 'Event_2ppmla6',
      type: 'bpmn:endEvent',
      x: 1260,
      y: 240,
      properties: {},
    },
  ],
  edges: [
    {
      id: 'Flow_2vrqngu',
      type: 'bpmn:sequenceFlow',
      sourceNodeId: 'Event_28948e4',
      targetNodeId: 'Gateway_0rug0oj',
      startPoint: {
        x: 558,
        y: 240,
      },
      endPoint: {
        x: 655,
        y: 240,
      },
      properties: {},
      pointsList: [
        {
          x: 558,
          y: 240,
        },
        {
          x: 655,
          y: 240,
        },
      ],
    },
    {
      id: 'Flow_2pl27nr',
      type: 'bpmn:sequenceFlow',
      sourceNodeId: 'Gateway_0rug0oj',
      targetNodeId: 'Activity_1lvhm7l',
      startPoint: {
        x: 705,
        y: 240,
      },
      endPoint: {
        x: 770,
        y: 180,
      },
      properties: {},
      pointsList: [
        {
          x: 705,
          y: 240,
        },
        {
          x: 735,
          y: 240,
        },
        {
          x: 735,
          y: 180,
        },
        {
          x: 770,
          y: 180,
        },
      ],
    },
    {
      id: 'Flow_3llnho1',
      type: 'bpmn:sequenceFlow',
      sourceNodeId: 'Gateway_0rug0oj',
      targetNodeId: 'Activity_0j0f0l5',
      startPoint: {
        x: 705,
        y: 240,
      },
      endPoint: {
        x: 770,
        y: 300,
      },
      properties: {},
      pointsList: [
        {
          x: 705,
          y: 240,
        },
        {
          x: 735,
          y: 240,
        },
        {
          x: 735,
          y: 300,
        },
        {
          x: 770,
          y: 300,
        },
      ],
    },
    {
      id: 'Flow_0h3u4lp',
      type: 'bpmn:sequenceFlow',
      sourceNodeId: 'Activity_1lvhm7l',
      targetNodeId: 'Gateway_1et50le',
      startPoint: {
        x: 870,
        y: 180,
      },
      endPoint: {
        x: 955,
        y: 240,
      },
      properties: {},
      pointsList: [
        {
          x: 870,
          y: 180,
        },
        {
          x: 925,
          y: 180,
        },
        {
          x: 925,
          y: 240,
        },
        {
          x: 955,
          y: 240,
        },
      ],
    },
    {
      id: 'Flow_2qlhldh',
      type: 'bpmn:sequenceFlow',
      sourceNodeId: 'Activity_0j0f0l5',
      targetNodeId: 'Gateway_1et50le',
      startPoint: {
        x: 870,
        y: 300,
      },
      endPoint: {
        x: 955,
        y: 240,
      },
      properties: {},
      pointsList: [
        {
          x: 870,
          y: 300,
        },
        {
          x: 925,
          y: 300,
        },
        {
          x: 925,
          y: 240,
        },
        {
          x: 955,
          y: 240,
        },
      ],
    },
    {
      id: 'Flow_2p5cqn6',
      type: 'bpmn:sequenceFlow',
      sourceNodeId: 'Gateway_1et50le',
      targetNodeId: 'Activity_3nqr8of',
      startPoint: {
        x: 1005,
        y: 240,
      },
      endPoint: {
        x: 1090,
        y: 240,
      },
      properties: {},
      pointsList: [
        {
          x: 1005,
          y: 240,
        },
        {
          x: 1090,
          y: 240,
        },
      ],
    },
    {
      id: 'Flow_2si8fr3',
      type: 'bpmn:sequenceFlow',
      sourceNodeId: 'Activity_3nqr8of',
      targetNodeId: 'Event_2ppmla6',
      startPoint: {
        x: 1190,
        y: 240,
      },
      endPoint: {
        x: 1242,
        y: 240,
      },
      properties: {},
      pointsList: [
        {
          x: 1190,
          y: 240,
        },
        {
          x: 1220,
          y: 240,
        },
        {
          x: 1220,
          y: 240,
        },
        {
          x: 1212,
          y: 240,
        },
        {
          x: 1212,
          y: 240,
        },
        {
          x: 1242,
          y: 240,
        },
      ],
    },
  ],
}
