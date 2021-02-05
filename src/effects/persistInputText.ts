import { createReduxEffect } from "../lib/redux-effects"
import { updateInputText, UpdateInputTextAction } from "../redux/actions"
import { MyReduxEffect } from "../types"

export default createReduxEffect(updateInputText.type, (action) => {
  localStorage.setItem("input-text", action.payload.value)
}) as MyReduxEffect<UpdateInputTextAction>
