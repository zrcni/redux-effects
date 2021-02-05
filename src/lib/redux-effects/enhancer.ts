import { AnyAction, StoreEnhancer } from "redux"
import { EffectHandler } from "./EffectHandler"
import { EventEnhancerStoreExt } from "./types"

export function createEnhancer<S = {}, C extends Record<string, any> = {}>(
  context: C
): StoreEnhancer<EventEnhancerStoreExt<C>> {
  return (createStore: any) => (...args: any[]) => {
    const store = createStore(...args)

    const effectHandler = new EffectHandler<S, C>(store, context)

    function dispatch(action: AnyAction) {
      store.dispatch(action)

      if (isValidAction(action)) {
        effectHandler.invoke(action)
      }
    }

    return {
      ...store,
      dispatch,
      registerEffect: effectHandler.register,
    }
  }
}

function isValidAction(action: any) {
  return typeof action === "object" && !!action.type
}