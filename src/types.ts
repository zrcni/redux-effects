import { Action, AnyAction } from "redux"
import { ReduxEffect } from "./lib/redux-effects/types"

export interface AnalyticsClient {
  click(userId: string, element: HTMLElement): void
}

export interface EffectContextArgument {
  analyticsClient: AnalyticsClient
}

export interface ReduxState {
  userId: string
  inputText: string
}

export type MyReduxEffect<A extends Action = AnyAction> = ReduxEffect<
  ReduxState,
  A,
  EffectContextArgument
>
