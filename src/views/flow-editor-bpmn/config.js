export const BpmnNode = [
  {
    type: 'bpmn:startEvent',
    text: '开始',
    class: 'bpmn-start',
  },
  {
    type: 'bpmn:exclusiveGateway',
    text: '判断条件',
    class: 'bpmn-exclusiveGateway',
  },
  {
    type: 'bpmn:serviceTask',
    text: '系统任务',
    class: 'bpmn-serviceTask',
  },
  {
    type: 'bpmn:userTask',
    text: '用户任务',
    class: 'bpmn-user',
  },
  {
    type: 'bpmn:endEvent',
    text: '结束',
    class: 'bpmn-end',
  },
]
export const EditorConfig = {
  grid: true,
  background: {
    color: '#f7f9ff',
  },
  keyboard: {
    enabled: true,
  },
}
