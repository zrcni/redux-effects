import cloneDeep from "lodash.clonedeep"
import { nanoid } from "nanoid"

export function createStore<S = any, C = any>() {
  return new Store<S, C>()
}

let storeContext: any = {
  state: {},
  coeffects: {},
  coeffectHandlers: {},
  effectHandlers: {},
  effectEventHandlers: {},
  stateEventHandlers: {},
  subscriptions: {},
  prevCoeffects: {},
}

export function registerCoeffect<C = any, V = any>(
  key: string,
  handler: (coeffects: C) => V
) {
  storeContext.coeffectHandlers[key] = handler
}

export function unregisterCoeffect(key: string) {
  delete storeContext.coeffectHandlers[key]
}

export function unregisterCoeffects() {
  for (const key in storeContext.coeffectHandlers) {
    unregisterCoeffect(key)
  }
}

export interface EffectCallback<Args extends Array<any> = any[]> {
  (...args: Args): void
}

export function registerEffect<Args extends Array<any> = []>(
  key: string,
  callback: EffectCallback<Args>
) {
  storeContext.effectHandlers[key] = callback

  return function unregister() {
    delete storeContext.effectHandlers[key]
  }
}

export function unregisterEffects() {
  for (const key in storeContext.effectHandlers) {
    delete storeContext.effectHandlers[key]
  }
}

export interface EffectEventCallback<A = Action, C = any> {
  (coeffects: C, action: A): Partial<C> | void
}

export function registerEffectEvent<A = Action, C = any>(
  actionType: string,
  callback: EffectEventCallback<A, C>
) {
  const id = nanoid()
  if (!storeContext.effectEventHandlers[actionType]) {
    storeContext.effectEventHandlers[actionType] = {}
  }
  storeContext.effectEventHandlers[actionType][id] = callback

  return function unregister() {
    delete storeContext.effectEventHandlers[actionType][id]
  }
}

export interface StateEventCallback<A = Action, S = any> {
  (state: S, action: A): S
}

export function registerStateEvent<A extends Action = any, S = any>(
  actionType: string,
  callback: StateEventCallback<A, S>
) {
  const id = nanoid()
  if (!storeContext.stateEventHandlers[actionType]) {
    storeContext.stateEventHandlers[actionType] = {}
  }
  storeContext.stateEventHandlers[actionType][id] = callback

  return function unregister() {
    delete storeContext.stateEventHandlers[actionType][id]
  }
}

export class Store<S = any, C = any> {
  private dispatching: boolean = false
  private dispatchQueue: Action[] = []

  constructor() {
    storeContext.state = {}
  }

  getState = (): S => {
    return cloneDeep(storeContext.state)
  }

  private updateSubscriptions() {
    const state = this.getState()

    for (const id in storeContext.subscriptions) {
      const onUpdate = storeContext.subscriptions[id]
      onUpdate(state)
    }
  }

  subscribe(fn: (state: S) => any) {
    const id = nanoid()
    storeContext.subscriptions[id] = fn

    return function unsubscribe() {
      delete storeContext.subscriptions[id]
    }
  }

  dispatch = (action: Action) => {
    if (!isAction(action)) {
      throw new Error("An action must have property 'type'")
    }
    this.queueDispatch(action)
  }

  private queueDispatch = (action: Action) => {
    if (this.dispatching) {
      this.dispatchQueue.push(action)
    } else {
      this._dispatch(action)
    }
  }

  private _dispatch = (action: Action) => {
    this.dispatching = true

    let stateUpdated = false

    for (const id in storeContext.stateEventHandlers[action.type]) {
      const handler = storeContext.stateEventHandlers[action.type][id]
      const newState = handler(this.getState(), action)
      // true if null or undefined
      if (newState != null) {
        stateUpdated = true
        storeContext.state = newState
      }
    }

    if (stateUpdated) {
      // trigger something on update
      // force copy once all updates are made
      storeContext.state = cloneDeep(storeContext.state)
      this.updateSubscriptions()
    }

    for (const id in storeContext.effectEventHandlers[action.type] || {}) {
      const handler = storeContext.effectEventHandlers[action.type][id]
      const effects = handler(this.getCoeffects(), action)
      for (const key in effects || {}) {
        if (key === "state") {
          storeContext.state = cloneDeep(effects[key])
        } else if (key in storeContext.effectHandlers) {
          const handler = storeContext.effectHandlers[key]
          const args = effects[key]
          const updatedCoeffects = handler(...args)
          if (updatedCoeffects) {
            storeContext.coeffects = {
              ...storeContext.coeffects,
              ...updatedCoeffects,
            }
          }
        }
      }
    }

    this.dispatching = false

    const nextAction = this.dispatchQueue.shift()
    if (nextAction) {
      this._dispatch(nextAction)
    }
  }

  getCoeffects = (): C & { state: S } => {
    let coeffects: any = {}
    for (const key in storeContext.coeffectHandlers) {
      const handler = storeContext.coeffectHandlers[key]
      coeffects[key] = handler()
    }
    coeffects.state = this.getState()
    storeContext.prevCoeffects = coeffects
    return coeffects
  }
}

export interface Action<T = any> {
  type: T
}

function isAction(action: any) {
  return typeof action === "object"
    ? Object.hasOwnProperty.call(action, "type")
    : false
}
