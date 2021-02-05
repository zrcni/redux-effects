import { nanoid } from "nanoid"
import { Action, Store } from "redux"
import { ReduxEffect, ReduxEffectCallback } from "./types"

export class EffectHandler<C = object> {
  private effectMap: EffectMap = {}
  private store: Store
  private context: C

  constructor(store: Store, context: C) {
    this.store = store
    this.context = context
  }

  register = (effect: ReduxEffect<C>) => {
    const effectMap = this.effectMap

    if (!effectMap[effect.type]) {
      effectMap[effect.type] = {}
    }

    const id = nanoid()
    effectMap[effect.type][id] = effect.callback

    return function unregister() {
      delete effectMap[effect.type][id]
    }
  }

  invoke = (action: Action) => {
    if (!this.effectMap[action.type]) return
    for (const id in this.effectMap[action.type]) {
      const callback = this.effectMap[action.type][id]
      callback(action, {
        ...this.context,
        getState: this.store.getState,
        dispatch: this.store.dispatch,
      })
    }
  }
}

interface EffectMap {
  [type: string]: {
    [id: string]: ReduxEffectCallback
  }
}
