import { Action } from "../lib/effectrix"

export function initializeState(): InitializeStateAction {
  return {
    type: "initializeState",
  }
}

initializeState.type = "initializeState"

export interface InitializeStateAction extends Action<"initializeState"> {}
