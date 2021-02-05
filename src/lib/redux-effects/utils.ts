import { ReduxEffect } from "./types"

export function createReduxEffect(
  actionTypeOrEffect: string | ReduxEffect,
  callback: any
): ReduxEffect {
  if (
    typeof actionTypeOrEffect === "object" &&
    typeof actionTypeOrEffect.callback === "function"
  ) {
    return actionTypeOrEffect
  }
  return {
    type: actionTypeOrEffect as string,
    callback,
  }
}

export function getComponentDisplayName(WrappedComponent: any) {
  return (
    WrappedComponent.displayName || WrappedComponent.name || "WrappedComponent"
  )
}
