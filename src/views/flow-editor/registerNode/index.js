import { registerApply } from './registerApply'
import { registerApprover } from './registerApprover'
import { registerJudgement } from './registerJudgement'
import { registerFinish } from './registerFinish'
export const registerNode = (lf) => {
  registerApply(lf)
  registerApprover(lf)
  registerJudgement(lf)
  registerFinish(lf)
}
