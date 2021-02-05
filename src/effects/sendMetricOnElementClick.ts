import { createReduxEffect } from "../lib/redux-effects"
import { elementClicked, ElementClickedAction } from "../redux/actions"
import { EffectContext, ReduxState } from "../types"

export default createReduxEffect<
  ReduxState,
  ElementClickedAction,
  EffectContext
>(elementClicked.type, (action, context) => {
  context.analyticsClient.click(action.payload.element)
})
