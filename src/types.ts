import { AnyAction } from "redux"

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

export interface ReduxState {}
