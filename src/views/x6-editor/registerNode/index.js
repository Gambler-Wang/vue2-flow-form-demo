import { Graph } from '@antv/x6'
import { portsConfig } from '../config'
import registerImageNode from './registerImageNode'
import registerCircleNode from './registerCircleNode'
import registerRectNode from './registerRectNode'
import registerPolygonNode from './registerPolygonNode'
registerImageNode(Graph, portsConfig)
registerCircleNode(Graph, portsConfig)
registerRectNode(Graph, portsConfig)
registerPolygonNode(Graph, portsConfig)
export { Graph }
// Graph.registerNode(
//   'custom-cylinder',
//   {
//     inherit: 'cylinder',
//     width: 62,
//     height: 48,
//     attrs: {
//       body: {
//         strokeWidth: 1,
//         stroke: '#5F95FF',
//         fill: '#EFF4FF',
//       },
//       text: {
//         fontSize: 12,
//         fill: '#262626',
//         refY: 32,
//       },
//       top: {
//         strokeWidth: 1,
//         stroke: '#5F95FF',
//         fill: '#EFF4FF',
//       },
//     },
//     ports: { ...portsConfig },
//   },
//   true
// )

// Graph.registerNode(
//   'custom-text',
//   {
//     inherit: 'text-block',
//     width: 60,
//     height: 36,
//     attrs: {
//       body: {
//         // strokeWidth: 0,
//         rx: 4,
//         ry: 4,
//         fill: '#fff',
//         stroke: '#fff',
//       },
//       text: {
//         fontSize: 12,
//         fill: '#000',
//       },
//     },
//     ports: { ...portsConfig },
//   },
//   true
// )

// Graph.registerNode(
//   'custom-path',
//   {
//     inherit: 'path',
//     width: 60,
//     height: 36,
//     attrs: {
//       body: {
//         strokeWidth: 1,
//         stroke: '#5F95FF',
//         fill: '#EFF4FF',
//       },
//       text: {
//         fontSize: 12,
//         fill: '#262626',
//       },
//     },
//     ports: { ...portsConfig },
//   },
//   true
// )
