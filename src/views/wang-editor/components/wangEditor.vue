<template>
  <div class="wang-editor-container">
    <div id="toolbar-container"><!-- 工具栏 --></div>
    <div id="editor-container"><!-- 编辑器 --></div>
  </div>
</template>

<script>
import { createEditor, createToolbar, Boot } from '@wangeditor/editor'
let editor = {}
let currentVueObj = {}
export default {
  name: 'WangEditor',
  mounted(){
    currentVueObj = this
    // this.initEditor('#Editor')
    const editorConfig = {
      placeholder: '请输入内容',
      onChange(editor) {
        // const html = editor.getHtml()
        // console.log('editor content', html)
        // editor.setHtml(`<h5 id="companyInfomationEditorTitle" style="border-bottom:1px solid #DFE0E6;padding:8px 0 16px;cursor: text;"></h5>`)
      },
    }
    const toolbarConfig = {
      excludeKeys: ['emotion', 'group-video', 'codeBlock', 'insertTable', 'divider', 'fullScreen'],
      // insertKeys: {
      //   index: 30,
      //   keys: ['importMenuKey'], // show menu in toolbar
      // },
    }
    // try {
    //   Boot.registerMenu({
    //     key: 'importMenuKey',
    //     factory() {
    //       const importMenu = importMenuFn()
    //       importMenu.exec = currentVueObj.showImportArticleModal
    //       return importMenu
    //     },
    //   })
    // } catch (e) {}
    editor = createEditor({
      selector: '#editor-container',
      html: '',
      config: editorConfig,
      mode: 'default', // or 'simple'
    })
    createToolbar({
      editor,
      selector: '#toolbar-container',
      config: toolbarConfig,
      mode: 'default', // or 'simple'
    })
  }
}
</script>

<style src="@wangeditor/editor/dist/css/style.css"></style>
<style>

  #editor—wrapper {
    border: 1px solid #ccc;
    z-index: 100; /* 按需定义 */
  }
  #toolbar-container {
    border-bottom: 1px solid #ccc;
  }
  #editor-container {
    height: 500px;
  }
</style>