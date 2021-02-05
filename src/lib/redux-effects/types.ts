import { Action, Store } from "redux"

export type ReduxEffectCallback<C = any> = (action: Action, context: C) => any

export interface ReduxEffect<C = object> {
  type: string
  callback: ReduxEffectCallback<C>
}

export interface EventEnhancerStoreExt<C = object> {
  registerEffect(effect: ReduxEffect<C>): () => void
}

export interface StoreWithEventEnhancer<C = object>
  extends Store,
    EventEnhancerStoreExt<C> {}
