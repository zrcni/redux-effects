import { createStore as createReduxStore, compose } from "redux"
import createReduxEffectEnhancer from "../lib/redux-effects"
import { EffectContextArgument, ReduxState } from "../types"
import { createReducer } from "./reducer"

export function createStore(
  initialState: ReduxState,
  context: EffectContextArgument
) {
  const _compose: typeof compose =
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

  return createReduxStore(
    createReducer(),
    initialState,
    _compose(
      createReduxEffectEnhancer<ReduxState, any, EffectContextArgument>(context)
    )
  )
}
