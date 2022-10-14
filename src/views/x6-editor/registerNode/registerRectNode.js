export default function registerRectNode(Graph, portsConfig) {
  Graph.registerNode(
    'custom-rect',
    {
      inherit: 'rect',
      width: 80,
      height: 36,
      attrs: {
        body: {
          strokeWidth: 1,
          stroke: '#5F95FF',
          fill: '#EFF4FF',
        },
        text: {
          fontSize: 12,
          fill: '#262626',
        },
      },
      ports: { ...portsConfig },
    },
    true
  )
}
