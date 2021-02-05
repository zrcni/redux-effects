import { createReduxEffect } from "../lib/redux-effects"
import { elementClicked, ElementClickedAction } from "../redux/actions"
import { MyReduxEffect } from "../types"

export default createReduxEffect(elementClicked.type, (action, context) => {
  context.analyticsClient.click(action.payload.element)
}) as MyReduxEffect<ElementClickedAction>
