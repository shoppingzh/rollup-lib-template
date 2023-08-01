import path from 'path'
import { defineConfig } from 'rollup'
import alias from '@rollup/plugin-alias'
import { babel } from '@rollup/plugin-babel'
import sizes from '@atomico/rollup-plugin-sizes'
import ts from '@rollup/plugin-typescript'
import beep from '@rollup/plugin-beep'
import terser from '@rollup/plugin-terser'
import pkg from '../package.json'
import clear from 'rollup-plugin-clear'
import strip from '@rollup/plugin-strip'

export default defineConfig({
  input: 'src/index.ts',
  output: {
    dir: 'dist',
    format: 'umd',
    name: 'MyLib',
  },
  external: Object.keys((pkg as any).peerDependencies || {}),
  plugins: [
    alias({
      entries: {
        '@': path.resolve(__dirname, '../src')
      }
    }),
    clear({
      targets: ['dist'],
    }),
    ts({
      tsconfig: path.resolve(__dirname, '../tsconfig.json'),
    }),
    babel({
      babelHelpers: 'runtime',
    }),
    // 去除console.log
    strip({
      include: 'src/**/*.{ts,js}'
    }),
    // 生成包大小监控
    sizes(100),
    // 代码混淆
    terser(),
    // 警告声
    beep(),
  ],
})
