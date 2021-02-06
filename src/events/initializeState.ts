import { registerEffectEvent } from "../lib/effectrix"
import { InitializeStateAction } from "../actions"
import { Coeffects } from "../types"
import { initializeState } from "../actions/initializeState"

const defaultState = {
  inputText: "",
}

registerEffectEvent<InitializeStateAction, Coeffects>(
  initializeState.type,
  (coeffects) => {
    return {
      state: {
        ...defaultState,
        inputText:
          coeffects.getLocalStorage("input-text") || defaultState.inputText,
      },
    }
  }
)
