import { PolygonNode, PolygonNodeModel, h } from '@logicflow/core'

export const registerJudgement = (lf) => {
  class JudgementNodeModel extends PolygonNodeModel {
    constructor(data, graphModel) {
      super(data, graphModel);
      this.points = [
        [35, 0],
        [70, 35],
        [35, 70],
        [0, 35],
      ];
      this.properties = {
        api: '',
      }
    }
  }

  lf.register({
    type: 'judgement',
    view: PolygonNode,
    model: JudgementNodeModel,
  })
}
