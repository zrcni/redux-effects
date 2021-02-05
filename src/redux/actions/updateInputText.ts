import { Action } from "redux"

export function updateInputText(value: string): UpdateInputTextAction {
  return {
    type: "updateInputText",
    payload: { value },
  }
}

updateInputText.type = "updateInputText"

export interface UpdateInputTextAction extends Action<"updateInputText"> {
  payload: { value: string }
}
