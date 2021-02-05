import EventEmitter from "eventemitter3"
import { createEnhancer } from "./enhancer"

export function createEventEnhancer<C = object>(
  contextOrEventEmitter?: C | EventEmitter,
  context?: C
) {
  if (!context && !contextOrEventEmitter) {
    return createEnhancer(new EventEmitter(), {})
  }

  if (!context && contextOrEventEmitter) {
    return createEnhancer(
      new EventEmitter(),
      (contextOrEventEmitter as C) || {}
    )
  }

  return createEnhancer(
    contextOrEventEmitter as EventEmitter,
    (context as C) || {}
  )
}

export default createEventEnhancer
