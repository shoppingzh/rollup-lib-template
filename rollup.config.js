import alias from '@rollup/plugin-alias'
import babel from '@rollup/plugin-babel'
import { uglify } from 'rollup-plugin-uglify'
import sizes from '@atomico/rollup-plugin-sizes'

export default {
  input: 'src/index.js',
  // treeshake: false, // 是否开启tree shake
  output: {
    dir: 'dist',
    format: 'umd',
    name: 'MyLib',
    globals: {
      'lodash': '_',
      '@babel/runtime-corejs2/helpers/classCallCheck': '_classCallCheck',
      '@babel/runtime-corejs2/helpers/createClass': '_createClass'
    }
  },
  external: [
    'lodash',
    /@babel\/runtime/
  ],
  plugins: [
    // 别名
    alias({
      entries: [{
        find: '@utils',
        replacement: 'src/utils'
      }]
    }),
    // 代码转译、polyfill
    babel({
      babelHelpers: 'runtime'
    }),
    // 生成包大小监控
    sizes(100),
    // 代码混淆
    uglify({
      sourcemap: false
    })
  ]
}
