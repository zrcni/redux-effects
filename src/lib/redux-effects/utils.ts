import { Action, AnyAction } from "redux"
import { ReduxEffect, ReduxEffectCallback } from "./types"

export function createReduxEffect<
  S = {},
  A extends Action = AnyAction,
  C extends Record<string, any> = {}
>(
  actionTypeOrEffect: string | ReduxEffect<S, A, C>,
  callback?: ReduxEffectCallback<S, A, C>
): ReduxEffect<S, A, C> {
  validateParams<S, A, C>(actionTypeOrEffect, callback)

  if (
    typeof actionTypeOrEffect === "object" &&
    typeof actionTypeOrEffect.callback === "function"
  ) {
    return actionTypeOrEffect
  }
  return {
    type: actionTypeOrEffect as string,
    callback: callback as ReduxEffectCallback<S, A, C>,
  }
}

function validateParams<
  S = {},
  A extends Action = AnyAction,
  C extends Record<string, any> = {}
>(
  actionTypeOrEffect: string | ReduxEffect<S, A, C>,
  callback?: ReduxEffectCallback<S, A, C>
) {
  if (!actionTypeOrEffect) {
    throw new Error(
      "Action type or effect is required as the first parameter for createReduxEffect"
    )
  }

  if (!isEffect(actionTypeOrEffect) && typeof actionTypeOrEffect !== "string") {
    throw new Error(
      "First parameter to createReduxEffect must be a valid action type or an effect"
    )
  }

  if (typeof actionTypeOrEffect === "string" && !callback) {
    throw new Error(
      "Callback is required as the second paramter for for createReduxEffect"
    )
  }
}

function isEffect(effect?: any) {
  return (
    typeof effect === "object" &&
    typeof effect.type === "string" &&
    typeof effect.callback === "function"
  )
}
