import { State } from "../types"

export function selectInputText(state: State): string {
  return state.inputText || ""
}
