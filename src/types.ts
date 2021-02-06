export interface AnalyticsClient {
  click(element: HTMLElement): void
}

export interface Coeffects {
  analyticsClient: AnalyticsClient
}

export interface State {
  inputText: string
}
