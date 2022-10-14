import { uniqueId } from '@/utils/index'

const label = '数字'
const name = 'DiyInput'

export default {
  id: uniqueId(name),
  icon: 'icon-input',
  label,
  name,
  colWidth: '50%',
  props: {
    label,
    type: 'number',
    rightTip: '',
    placeholder: '请输入',
    defaultValue: '',
    isRequired: 0,
  },
}
