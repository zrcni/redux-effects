import { GetLocalStorageCoeffect } from "./lib/effectrix/coeffects/getLocalStorage"
import { StateCoeffect } from "./lib/effectrix/coeffects/state"

export interface AnalyticsClient {
  click(element: HTMLElement): void
}

export interface Coeffects extends StateCoeffect, GetLocalStorageCoeffect {
  analyticsClient: AnalyticsClient
}

export interface State {
  inputText: string
}
