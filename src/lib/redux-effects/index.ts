import { createEnhancer } from "./enhancer"

export function createReduxEffectEnhancer<
  S = {},
  C extends Record<string, any> = {}
>(context?: C) {
  return createEnhancer<S, C>(context || {} as any)
}

export { createReduxEffect } from "./utils"
export { registerReduxEffect } from "./EffectHandler"

export default createReduxEffectEnhancer
