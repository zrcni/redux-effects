import { registerEffectEvent, registerStateEvent } from "../lib/effectrix"
import { updateInputText, UpdateInputTextAction } from "../actions"
import { State } from "../types"

registerStateEvent<UpdateInputTextAction, State>(
  updateInputText.type,
  (state, action) => ({
    ...state,
    inputText: action.payload.value,
  })
)

registerEffectEvent<UpdateInputTextAction>(
  updateInputText.type,
  (_, action) => ({
    setLocalStorage: ["input-text", action.payload.value],
  })
)
