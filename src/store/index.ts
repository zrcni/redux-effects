import { createStore as createEffectrixStore } from "../lib/effectrix"
import defaultState from "./defaultState"
import { Coeffects, State } from "../types"

export function createStore() {
  return createEffectrixStore<State, Coeffects>(defaultState())
}
