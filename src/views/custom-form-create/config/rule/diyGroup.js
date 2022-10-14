import { uniqueId } from '@/utils/index'

const label = '分组标题'
const name = 'DiyGroup'

export default {
  id:uniqueId(name),
  icon: 'icon-divider',
  label,
  name,
  colWidth:'100%',
  props:{
    label,
  }
}
