import { createReduxEffect } from "../lib/redux-effects"
import { elementClicked, ElementClickedAction } from "../redux/actions"
import { EffectContext } from "../types"

export default createReduxEffect(
  elementClicked.type,
  (action: ElementClickedAction, context: EffectContext) => {
    context.analyticsClient.click(action.payload.element)
  }
)
