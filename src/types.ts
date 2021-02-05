import { Action, AnyAction } from "redux"
import { ReduxEffect } from "./lib/redux-effects/types"

export interface AnalyticsClient {
  click(element: HTMLElement): void
}

export interface EffectContextArgument {
  analyticsClient: AnalyticsClient
}

export interface EffectContext<S = {}> extends EffectContextArgument {
  getState(): S
  dispatch(action: AnyAction): void
}

export interface ReduxState {
  inputText: string
}

export type MyReduxEffect<A extends Action = AnyAction> = ReduxEffect<
  ReduxState,
  A,
  EffectContext
>
