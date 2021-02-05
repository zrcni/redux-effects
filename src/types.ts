import { Action } from "redux"

export interface AnalyticsClient {
  click(element: HTMLElement): void
}

export interface EffectContextArgument {
  analyticsClient: AnalyticsClient
}

export interface EffectContext<A = Action, S = {}>
  extends EffectContextArgument {
  getState(): S
  dispatch(action: A): void
}

export interface ReduxState {}
