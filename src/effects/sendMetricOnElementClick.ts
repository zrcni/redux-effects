import { createReduxEffect } from "../lib/redux-effects"
import { clickElement, ClickElementAction } from "../redux/actions"
import { selectUserId } from "../redux/selectors"
import { MyReduxEffect } from "../types"

export default createReduxEffect(clickElement.type, (action, context) => {
  const userId = selectUserId(context.getState())
  context.analyticsClient.click(userId, action.payload.element)
}) as MyReduxEffect<ClickElementAction>
