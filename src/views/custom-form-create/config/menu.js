import diyInputConfig from './rule/diyInput'
import diyTextareaConfig from './rule/diyTextarea'
import diyNumberConfig from './rule/diyNumber'
import diyGroupConfig from './rule/diyGroup'
import diySelect from './rule/diySelect'

export default function createMenu() {
  return [
    {
      name: 'main',
      title: '基础字段',
      list: [
        diyInputConfig,
        diyTextareaConfig,
        diyNumberConfig,
        diyGroupConfig,
        diySelect
      ],
    }
  ]
}
