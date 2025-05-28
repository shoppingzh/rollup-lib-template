import { defineConfig, ExternalOption, InputPluginOption } from 'rollup'
import alias from '@rollup/plugin-alias'
import { babel } from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import sizes from '@atomico/rollup-plugin-sizes'
import ts from '@rollup/plugin-typescript'
import beep from '@rollup/plugin-beep'
import terser from '@rollup/plugin-terser'
import pkg from '../package.json'
import clear from 'rollup-plugin-clear'
import strip from '@rollup/plugin-strip'
import replace from '@rollup/plugin-replace'
import config from './config'
import { dts } from 'rollup-plugin-dts'

const input = 'src/index.ts'
const external: ExternalOption = Object.keys(pkg.peerDependencies || {}).map(pkg => new RegExp(`^${pkg}`))
const commonPlugins: InputPluginOption = [
  alias({
    entries: {
      '@': config.srcRoot!,
    }
  }),
]

export default [
  defineConfig({
    input,
    output: {
      dir: config.outRoot,
      format: 'esm',
      name: 'MyLib',
    },
    external,
    plugins: [
      ...commonPlugins,
      config.isProdMode && clear({
        targets: [config.outRoot],
      }),
      commonjs(),
      ts(),
      config.isProdMode && config.useBabel && babel({
        exclude: ['node_modules'],
        babelHelpers: 'runtime',
        extensions: ['.ts'],
      }),
      // 去除console.log
      config.isProdMode && strip({
        include: 'src/**/*.{ts,js}'
      }),
      // 替换环境变量
      replace({
        preventAssignment: true,
        values: {
          ...(Object.entries(config.env).reduce((all, [key, value]) => {
            all[`process.env.${key}`] = JSON.stringify(value)
            return all
          }, {}))
        }
      }),
      // 生成包大小监控
      config.isProdMode && sizes(100),
      // 代码混淆
      config.isProdMode && config.useTerser && terser(),
      // 警告声
      beep(),
    ],
  }),
  defineConfig({
    input,
    output: {
      dir: config.outRoot,
    },
    plugins: [
      ...commonPlugins,
      dts({
        compilerOptions: {
          preserveSymlinks: false,
        }
      })
    ]
  })


]
