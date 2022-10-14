export default function registerCircleNode(Graph, portsConfig) {
  Graph.registerNode(
    'custom-circle',
    {
      inherit: 'circle',
      width: 48,
      height: 48,
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
