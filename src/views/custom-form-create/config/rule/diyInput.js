import { uniqueId } from '@/utils/index'

const label = '单行文本'
const name = 'DiyInput'

export default {
  id: uniqueId(name),
  icon: 'icon-input',
  label,
  name,
  colWidth: '50%',
  props: {
    label,
    type: 'text',
    rightTip: '',
    placeholder: '请输入',
    defaultValue: '',
    isRequired: 0,
  },
}
