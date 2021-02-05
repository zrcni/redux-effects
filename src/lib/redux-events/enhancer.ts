import { Action, Store } from "redux"

interface EventEmitter<C = object> {
  on(type: string, callback: (action: Action, context: C) => any): void
  off(type: string, callback: (action: Action, context: C) => any): void
  emit(type: string, action: Action, context: C): void
}

interface EventEnhancerStoreExt<C = object> {
  on(type: string, callback: (action: Action, context: C) => any): void
  off(type: string, callback: (action: Action, context: C) => any): void
}

export interface StoreWithEventEnhancer extends Store, EventEnhancerStoreExt {}

export function createEnhancer(
  eventEmitter: EventEmitter,
  context: object
): any {
  return (createStore: any) => (...args: any[]) => {
    const store = createStore(...args)

    store.on = eventEmitter.on.bind(eventEmitter)
    store.off = eventEmitter.off.bind(eventEmitter)

    function dispatch(action: Action) {
      store.dispatch(action)

      if (isValidAction(action)) {
        eventEmitter.emit(action.type, action, { ...context })
      }
    }

    return {
      ...store,
      dispatch,
    }
  }
}

function isValidAction(action: any) {
  return typeof action === "object" && !!action.type
}
