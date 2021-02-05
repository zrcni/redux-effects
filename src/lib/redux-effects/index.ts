import { createEnhancer } from "./enhancer"

export function createReduxEffectEnhancer<C = object>(context?: C) {
  return createEnhancer(context || {})
}

export { createReduxEffect } from "./utils"
export { useReduxEffect } from "./hook"
export { withReduxEffect } from "./hoc"
export { registerReduxEffect } from "./EffectHandler"

export default createReduxEffectEnhancer
