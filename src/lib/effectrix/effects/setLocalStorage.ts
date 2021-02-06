import { registerEffect } from "../core"

registerEffect<[string, string]>("setLocalStorage", (key, value) => {
  window.localStorage.setItem(key, value)
})
