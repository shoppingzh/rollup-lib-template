import env from './env'
import path from 'path'

interface Config {
  /** 环境变量配置 */
  env: Record<string, unknown>
  /** 是否为开发环境 */
  isDevMode: boolean
  /** 是否为生产环境 */
  isProdMode: boolean
  /** 输入目录 */
  srcRoot: string
  /** 输出目录 */
  outRoot: string
  /** 是否启用babel */
  useBabel?: boolean
  /** 是否启用terser */
  useTerser?: boolean
}

export default {
  env,
  isDevMode: env.NODE_ENV === 'dev',
  isProdMode: env.NODE_ENV === 'prod',
  srcRoot: path.resolve(__dirname, '../src'),
  outRoot: path.resolve(__dirname, '../dist'),
  useBabel: true,
  useTerser: true,
} as Config
