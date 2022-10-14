module.exports = {
  /**
   * 文件内局部设置
   * 【】eslint可以具体文件中设置特定代码的规则，常用于跳过某条语句的检测。
   * 【】注销全部规则，在代码前新建一行，添加注销 /* eslint-disable *\/  。如果没有恢复设置的语句，则下列全部代码都会跳过检测。
   * 【】恢复eslint，在代码前新建一行，添加注销 /* eslint-enable *\/
   * 【】指定忽略的规则，/* eslint-disable no-alert, no-console *\/
   * 【】在特定行禁用，// eslint-disable-line
   * 【】在下一行禁用，// eslint-disable-next-line
   */

  // 标识当前配置文件为eslint的根配置文件，让其停止在父级目录中继续寻找。
  root: true,
  // 此项指定环境的全局变量，下面的配置指定为浏览器环境
  env: {
    node: true,
  },
  // 此项是用来配置标准的js风格，就是说写代码的时候要规范的写，如果你使用vs-code我觉得应该可以避免出错
  extends: ['plugin:vue/essential', "eslint:recommended"],
  /*
   下面这些rules是用来设置从插件来的规范代码的规则，使用必须去掉前缀eslint-plugin-
    主要有如下的设置规则，可以设置字符串也可以设置数字，两者效果一致
    "off" -> 0 关闭规则
    "warn" -> 1 开启警告规则
    "error" -> 2 开启错误规则
  */
  plugins: ['vue'],
  'parserOptions': {
    'parser': 'babel-eslint',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // allow async-await
    'generator-star-spacing': 'off',
    // js语句结尾必须使用分号
    'semi': ['off', 'always'],
    // 三等号
    'eqeqeq': 0,
    // 强制在注释中 // 或 /* 使用一致的空格
    'spaced-comment': 0,
    // 关键字后面使用一致的空格
    'keyword-spacing': 0,
    // 强制在 function的左括号之前使用一致的空格
    'space-before-function-paren': 0,
    // 引号类型
    "quotes": [0, "single"],
    // 禁止出现未使用过的变量
    'no-unused-vars': 0,
    "no-undef": 0,
    // 要求或禁止末尾逗号
    'comma-dangle': 0,
    // 严格的检查缩进问题
    "indent": 0,
    //引入模块没有放入顶部
    "import/first": 0,
    //前面缺少空格，Missing space before
    "arrow-spacing": 0,
    //后面没有空位，There should be no space after this paren
    "space-in-parens": 0,
    "no-mixed-operators": 0,
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'never',
          normal: 'any',
          component: 'any',
        },
        svg: 'always',
        math: 'always',
      },
    ], //html使用单闭合标签 -打开（配置：在html中never从不开启）
  },
}
