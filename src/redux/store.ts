import { createStore as createReduxStore } from "redux"
import createReduxEffectEnhancer from "../lib/redux-effects"
import { EffectContextArgument } from "../types"
import { createReducer } from "./reducer"

export function createStore(initialState = {}, context: EffectContextArgument) {
  return createReduxStore(
    createReducer(),
    initialState,
    createReduxEffectEnhancer(context)
  )
}
