import { RectNode, RectNodeModel, h } from '@logicflow/core'

export const registerApprover = (lf) => {
  class ApproverNode extends RectNode {
    static extendKey = 'UserTaskNode'
    getLabelShape() {
      const { x, y, width, height, properties } = this.props.model
      const { labelColor, approveTypeLabel } = properties
      return h(
        'text',
        {
          fill: labelColor,
          fontSize: 12,
          x: x - width / 2 + 5,
          y: y - height / 2 + 15,
          width: 50,
          height: 25,
        },
        approveTypeLabel
      )
    }

    getShape() {
      const { x, y, width, height, radius } = this.props.model
      const style = this.props.model.getNodeStyle()
      return h('g', {}, [
        h('rect', {
          ...style,
          x: x - width / 2,
          y: y - height / 2,
          rx: radius,
          ry: radius,
          width,
          height,
        }),
        this.getLabelShape(),
      ])
    }
  }
  class ApproverNodeModel extends RectNodeModel {
    constructor(data, graphModel) {
      super(data, graphModel)
      this.properties = {
        labelColor: '#000000',
        status: 'await',
        approveType: '',
      }
    }

    getNodeStyle() {
      const style = super.getNodeStyle()
      const properties = this.properties
      if (properties.status === 'pass') {
        style.stroke = '#3CB371'
      } else if (properties.status === 'reject') {
        style.stroke = '#FF6347'
      } else {
        style.stroke = '#333333'
      }
      return style
    }
  }

  lf.register({
    type: 'approver',
    view: ApproverNode,
    model: ApproverNodeModel,
  })
}
