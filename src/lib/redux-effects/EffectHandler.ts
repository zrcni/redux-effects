import { nanoid } from "nanoid"
import { AnyAction, Store } from "redux"
import { ReduxEffect, ReduxEffectCallback } from "./types"
import { createReduxEffect } from "./utils"

const effectMap: EffectMap = {}

export function registerReduxEffect<A = AnyAction, C = object>(
  actionTypeOrEffect: string | ReduxEffect<A, C>,
  callback?: ReduxEffectCallback<A, C>
) {
  const effect = createReduxEffect<A, C>(actionTypeOrEffect, callback)

  if (!effectMap[effect.type]) {
    effectMap[effect.type] = {}
  }

  const id = nanoid()
  effectMap[effect.type][id] = effect.callback

  return function unregister() {
    delete effectMap[effect.type][id]
  }
}

export class EffectHandler<C = object> {
  private store: Store
  private context: C

  register = registerReduxEffect

  constructor(store: Store, context: C) {
    this.store = store
    this.context = context
  }

  invoke = (action: AnyAction) => {
    if (!effectMap[action.type]) return

    for (const id in effectMap[action.type]) {
      const callback = effectMap[action.type][id]
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
    [id: string]: any
  }
}
