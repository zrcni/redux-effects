import { createReduxEffect } from "../lib/redux-effects"
import { clickElement, ClickElementAction } from "../redux/actions"
import { MyReduxEffect } from "../types"

export default createReduxEffect(clickElement.type, (action, context) => {
  context.analyticsClient.click(action.payload.element)
}) as MyReduxEffect<ClickElementAction>
