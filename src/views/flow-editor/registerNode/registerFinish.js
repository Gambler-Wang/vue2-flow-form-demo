import { CircleNode, CircleNodeModel } from '@logicflow/core'

export const registerFinish = (lf) => {
  class FinishNodeModel extends CircleNodeModel {
    getConnectedSourceRules() {
      const rules = super.getConnectedSourceRules()
      const geteWayOnlyAsTarget = {
        message: '结束节点只能连入，不能连出！',
        validate: (source) => {
          let isValid = true
          if (source) {
            isValid = false
          }
          return isValid
        },
      }
      rules.push(geteWayOnlyAsTarget)
      return rules
    }
  }

  lf.register({
    type: 'finish',
    view: CircleNode,
    model: FinishNodeModel,
  })
}
