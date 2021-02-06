import { createStore as createEffectrixStore } from "../lib/effectrix"
import { Coeffects, State } from "../types"

export function createStore() {
  return createEffectrixStore<State, Coeffects>()
}
