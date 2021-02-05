import { createStore as createReduxStore } from "redux"
import createReduxEffectEnhancer from "../lib/redux-effects"
import { EffectContext } from "../types"
import { createReducer } from "./reducer"

export function createStore(initialState = {}, context: EffectContext) {
  return createReduxStore(
    createReducer(),
    initialState,
    createReduxEffectEnhancer(context)
  )
}
