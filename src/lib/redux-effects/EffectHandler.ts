import { nanoid } from "nanoid"
import { Action, AnyAction, Store } from "redux"
import { ReduxEffect, ReduxEffectCallback, ReduxEffectContext } from "./types"
import { createReduxEffect } from "./utils"

const effectMap: EffectMap = {}

export interface RegisterReduxEffect<
  S = {},
  A extends Action = AnyAction,
  C extends Record<string, any> = {}
> {
  (
    actionTypeOrEffect: string | ReduxEffect<S, A, C>,
    callback?: ReduxEffectCallback<S, A, C>
  ): () => void
}

export function registerReduxEffect<
  S = {},
  A extends Action = AnyAction,
  C extends Record<string, any> = {}
>(
  actionTypeOrEffect: string | ReduxEffect<S, A, C>,
  callback?: ReduxEffectCallback<S, A, C>
): () => void {
  const effect = createReduxEffect<S, A, C>(actionTypeOrEffect, callback)

  if (!effectMap[effect.type]) {
    effectMap[effect.type] = {}
  }

  const id = nanoid()
  effectMap[effect.type][id] = effect.callback

  return function unregister() {
    delete effectMap[effect.type][id]
  }
}

export class EffectHandler<S = {}, C extends Record<string, any> = {}> {
  private store: Store<S>
  private context: C

  register = registerReduxEffect

  constructor(store: Store<S>, context: C) {
    this.store = store
    this.context = context
  }

  invoke = (action: AnyAction) => {
    if (!effectMap[action.type]) return

    for (const id in effectMap[action.type]) {
      const callback: ReduxEffectCallback<
        S,
        AnyAction,
        C & ReduxEffectContext<S>
      > = effectMap[action.type][id]

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
