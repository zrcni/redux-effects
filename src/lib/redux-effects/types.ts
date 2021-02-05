import { AnyAction, Store } from "redux"

export type ReduxEffectCallback<A = AnyAction, C = any> = (
  action: A,
  context: C
) => any

export interface ReduxEffect<A = AnyAction, C = object> {
  type: string
  callback: ReduxEffectCallback<A, C>
}

export interface EventEnhancerStoreExt<C = object> {
  registerEffect(effect: ReduxEffect<AnyAction, C>): () => void
}

export interface StoreWithEventEnhancer<C = object>
  extends Store,
    EventEnhancerStoreExt<C> {}
