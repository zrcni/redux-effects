import { StoreWithEventEnhancer } from "../lib/redux-effects/types"
import { EffectContext } from "../types"

import { default as sendMetricOnElementClick } from "./sendMetricOnElementClick"

export function registerGlobalEffects(
  store: StoreWithEventEnhancer<EffectContext>
) {
  store.registerEffect(sendMetricOnElementClick)
}
