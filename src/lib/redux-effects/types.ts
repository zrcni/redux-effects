import { Action, AnyAction, Store } from "redux"
import { registerReduxEffect } from "./EffectHandler"

export type ReduxEffectCallback<
  S = {},
  A extends Action = AnyAction,
  C extends Record<string, any> = {}
> = (action: A, context: C & ReduxEffectContext<S>) => any

export interface ReduxEffect<
  S = {},
  A extends Action = AnyAction,
  C extends Record<string, any> = {}
> {
  type: string
  callback: ReduxEffectCallback<S, A, C & ReduxEffectContext<S>>
}

export interface EventEnhancerStoreExt<
  S = {},
  C extends Record<string, any> = {}
> {
  registerEffect: typeof registerReduxEffect
}

export interface StoreWithEventEnhancer<
  S = {},
  C extends Record<string, any> = {}
> extends Store,
    EventEnhancerStoreExt<S, C> {}

export interface ReduxEffectContext<S> {
  getState(): S
  dispatch(action: AnyAction): void
}
