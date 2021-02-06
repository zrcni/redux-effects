import { AnyAction, Reducer } from "redux"
import { ReduxState } from "../types"
import { updateInputText, UpdateInputTextAction } from "./actions"
import { createDefaultState } from "./defaultState"

export function createReducer(): Reducer<ReduxState, AnyAction> {
  return (state = createDefaultState(), action) => {
    switch (action.type) {
      case updateInputText.type:
        return {
          ...state,
          inputText: (action as UpdateInputTextAction).payload.value,
        }
      default:
        return state
    }
  }
}
