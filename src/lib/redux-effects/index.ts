import { Action, AnyAction } from "redux"
import { createEnhancer } from "./enhancer"

export function createReduxEffectEnhancer<
  S = {},
  A extends Action = AnyAction,
  C extends Record<string, any> = {}
>(context?: C) {
  return createEnhancer<S, A, C>(context || ({} as any))
}

export { createReduxEffect } from "./utils"
export { registerReduxEffect } from "./EffectHandler"

export default createReduxEffectEnhancer
