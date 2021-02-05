export interface AnalyticsClient {
  click(element: HTMLElement): void
}

export interface EffectContext {
  analyticsClient: AnalyticsClient
}

export interface ReduxState {}
