const vueJsxPlugin = require('@vitejs/plugin-vue-jsx')
const vuePlugin = require('@vitejs/plugin-vue')
const ts2 = require('rollup-plugin-typescript2')

/**
 * @type {import('vite').UserConfig}
 */
module.exports = {
  plugins: [
    ts2({ check: false }),
    vueJsxPlugin({
      include: [/\.tesx$/, /\.[jt]sx$/]
    }),
    vuePlugin()
  ],
  esbuild: false,
  build: {
    // to make tests faster
    minify: false
  }
}
