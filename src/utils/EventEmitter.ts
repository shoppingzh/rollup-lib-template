type Type = string | symbol
type Handler<T = unknown> = (e: T) => void
type HandlerList = Array<Handler>

interface EventEmitterInterface {
  on(type: Type, handler: Handler): void
  emit(type: Type, event: any): void
}

export default class EventEmitter implements EventEmitterInterface {
  private readonly all: Map<Type, HandlerList> = new Map()

  constructor() {}

  on(type: Type, handler: Handler<unknown>): void {
    let list: HandlerList = this.all.get(type)
    if (!list) {
      list = []
      this.all.set(type, list)
    }
    list.push(handler)
  }
  
  emit(type: Type, event: any): void {
    const list: HandlerList = this.all.get(type) || []
    for (const handler of list) {
      handler(event)
    }
  }

}
