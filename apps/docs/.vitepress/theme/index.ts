import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import LabHeader from './LabHeader.vue'
import './custom.css'

/** 渲染包含统一产品导航的 VitePress 布局。 */
const renderLayout = () => h(DefaultTheme.Layout, null, { 'layout-top': () => h(LabHeader) })

// theme 扩展默认文档主题，并在所有页面顶部注入统一产品导航。
const theme = {
  extends: DefaultTheme,
  Layout: renderLayout
}

export default theme
