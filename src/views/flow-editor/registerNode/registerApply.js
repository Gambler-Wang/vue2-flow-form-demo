import { CircleNode, CircleNodeModel } from "@logicflow/core";

export const registerApply = (lf) => {
  class ApplyNodeModel extends CircleNodeModel {
    getConnectedTargetRules() {
      const rules = super.getConnectedTargetRules();
      const geteWayOnlyAsTarget = {
        message: '开始节点只能连出，不能连入！',
        validate: (source, target) => {
          let isValid = true;
          if (target) {
            isValid = false;
          }
          return isValid;
        },
      };
      // @ts-ignore
      rules.push(geteWayOnlyAsTarget);
      return rules;
    }
  }

  lf.register({
    type: 'apply',
    view: CircleNode,
    model: ApplyNodeModel,
  })
};
