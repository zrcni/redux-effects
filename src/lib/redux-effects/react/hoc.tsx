import { useReduxEffect } from "./hook"
import { ReduxEffect, ReduxEffectCallback } from "../types"
import { createReduxEffect } from "../utils"

export function withReduxEffect(
  actionTypeOrEffect: string | ReduxEffect,
  callback?: ReduxEffectCallback
) {
  return (WrappedComponent: any) => {
    const effect = createReduxEffect(actionTypeOrEffect, callback)

    function HOC(props: any) {
      useReduxEffect(effect)
      return <WrappedComponent {...props} />
    }

    HOC.displayName = `withReduxEvent(${getComponentDisplayName(
      WrappedComponent
    )})`

    return HOC
  }
}

export function getComponentDisplayName(WrappedComponent: any): string {
  return (
    WrappedComponent.displayName || WrappedComponent.name || "WrappedComponent"
  )
}
