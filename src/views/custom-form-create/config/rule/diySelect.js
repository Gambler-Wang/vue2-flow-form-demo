import { uniqueId } from '@/utils/index'

const label = '下拉框'
const name = 'DiySelect'

export default {
  id: uniqueId(name),
  icon: 'icon-input',
  label,
  name,
  colWidth: '50%',
  props: {
    label,
    type: 'textarea',
    rightTip: '',
    placeholder: '请输入',
    defaultValue: '',
    isRequired: 0,
    candidateValue: '男,女',
  },
}
