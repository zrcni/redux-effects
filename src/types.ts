import {
  GetLocalStorageCoeffect,
  StateCoeffect,
} from "./lib/effectrix/coeffects/types"

export interface AnalyticsClient {
  click(element: HTMLElement): void
}

export interface Coeffects extends StateCoeffect, GetLocalStorageCoeffect {
  analyticsClient: AnalyticsClient
}

export interface State {
  inputText: string
}
