import { AnyAction, Reducer } from "redux"
import { ReduxState } from "../types"
import { updateInputText, UpdateInputTextAction } from "./actions"
import defaultState from "./defaultState"

export function createReducer(): Reducer<ReduxState | undefined, AnyAction> {
  return (state = defaultState, action) => {
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
