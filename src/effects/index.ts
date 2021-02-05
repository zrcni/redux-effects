import { useReduxEffect } from "../lib/redux-effects"

import { default as sendMetricOnElementClick } from "./sendMetricOnElementClick"
export { sendMetricOnElementClick }

export function useGlobalEffects() {
  useReduxEffect(sendMetricOnElementClick)
}
