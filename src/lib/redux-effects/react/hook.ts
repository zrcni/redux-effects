import { useEffect } from "react"
import { useStore } from "react-redux"
import { Action, AnyAction } from "redux"
import {
  ReduxEffect,
  ReduxEffectCallback,
  StoreWithEventEnhancer,
} from "../types"
import { createReduxEffect } from "../utils"

export function useReduxEffect<
  S = {},
  A extends Action = AnyAction,
  C extends Record<string, any> = {}
>(
  actionTypeOrEffect: string | ReduxEffect<S, A, C>,
  callback?: ReduxEffectCallback<S, A, C>
) {
  const store = useStore() as StoreWithEventEnhancer<S, A, C>

  useEffect(() => {
    const effect = createReduxEffect(actionTypeOrEffect, callback)
    const unregister = store.registerEffect(effect)
    return () => unregister()
  }, [actionTypeOrEffect, callback, store])
}
