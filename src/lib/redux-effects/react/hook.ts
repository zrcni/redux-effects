import { useEffect } from "react"
import { useStore } from "react-redux"
import {
  ReduxEffect,
  ReduxEffectCallback,
  StoreWithEventEnhancer,
} from "../types"
import { createReduxEffect } from "../utils"

export function useReduxEffect(
  actionTypeOrEffect: string | ReduxEffect,
  callback?: ReduxEffectCallback
) {
  const store = useStore() as StoreWithEventEnhancer

  useEffect(() => {
    const effect = createReduxEffect(actionTypeOrEffect, callback)
    const unregister = store.registerEffect(effect)
    return () => unregister()
  }, [actionTypeOrEffect, callback, store])
}
