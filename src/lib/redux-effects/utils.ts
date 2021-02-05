import { ReduxEffect } from "./types"

export function createReduxEffect<A, C>(
  actionTypeOrEffect: string | ReduxEffect<A, C>,
  callback: any
): ReduxEffect<A, C> {
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
