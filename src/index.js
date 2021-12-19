import { TestClass } from './es6'
import * as log from '@utils/log.js'
import * as common from '@utils/common.js'

log.dev(new TestClass().hello())

export default {
  log,
  common
}
