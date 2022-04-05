import EventEmitter from './utils/EventEmitter'

interface Model {
  count: number
}

const emitter: EventEmitter = new EventEmitter()
const btn: HTMLButtonElement = document.createElement('button')
btn.textContent = '点击我'
btn.addEventListener('click', e => {
  emitter.emit('click', e)
})
document.body.appendChild(btn)

const model: Model = {
  count: 0
}
;(function() {
  let val: number = 0
  Object.defineProperty(model, 'count', {
    get() {
      return val
    },
    set(newVal: number) {
      val = newVal
      btn.textContent = `点击了${val}次`
    }
  })
})();

emitter.on('click', (e) => {
  model.count++
})



