export default function registerPolygonNode(Graph, portsConfig) {
  Graph.registerNode(
    'custom-polygon',
    {
      inherit: 'polygon',
      width: 80,
      height: 38,
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
