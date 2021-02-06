import { registerEffectEvent } from "../lib/effectrix"
import { clickElement, ClickElementAction } from "../actions"

registerEffectEvent<ClickElementAction>(
  clickElement.type,
  (coeffects, action) => {
    coeffects.analyticsClient.click(action.payload.element)
  }
)
