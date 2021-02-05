import { createStore as createReduxStore } from "redux"
import createEventEnhancer from "../lib/redux-events"
import { createReducer } from "./reducer"

export function createStore(initialState = {}, context?: any) {
  return createReduxStore(
    createReducer(),
    initialState,
    createEventEnhancer(context)
  )
}
