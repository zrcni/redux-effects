import EventEmitter from "eventemitter3"
import { Action, Store } from "redux"
import { ReduxEffect } from "./types"

export class EffectHandler<C = object> {
  private eventEmitter: EventEmitter
  private store: Store
  private context: C

  constructor(store: Store, context: C) {
    this.store = store
    this.context = context
    this.eventEmitter = new EventEmitter()
  }

  register = (effect: ReduxEffect<C>) => {
    const eventEmitter = this.eventEmitter
    eventEmitter.on(effect.type, effect.callback)

    return function unregister() {
      eventEmitter.off(effect.type, effect.callback)
    }
  }

  emit = (action: Action) => {
    this.eventEmitter.emit(action.type, action, {
      ...this.context,
      getState: this.store.getState,
      dispatch: this.store.dispatch,
    })
  }
}
