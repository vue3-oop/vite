import { Plugin } from 'vite'
import { VueJSXPluginOptions } from '@vue3-oop/babel-plugin-jsx'
import { FilterPattern } from '@rollup/pluginutils'

declare interface FilterOptions {
  include?: FilterPattern
  exclude?: FilterPattern
}

declare function createPlugin(
  options?: VueJSXPluginOptions & FilterOptions & { babelPlugins?: any[] }
): Plugin

export default createPlugin
