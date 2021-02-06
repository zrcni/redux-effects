import { registerEffect } from "../core"

registerEffect<[string, string]>("setSessionStorage", (key, value) => {
  window.sessionStorage.setItem(key, value)
})
