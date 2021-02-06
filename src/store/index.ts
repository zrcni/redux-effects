import { initializeState } from "../actions"
import { createStore as createEffectrixStore } from "../lib/effectrix"
import { Coeffects, State } from "../types"

export function createStore() {
  const store = createEffectrixStore<State, Coeffects>()
  store.dispatch(initializeState())
  return store
}
