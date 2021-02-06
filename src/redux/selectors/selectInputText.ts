import { ReduxState } from "../../types"

export function selectInputText(state: ReduxState) {
  return state.inputText
}
