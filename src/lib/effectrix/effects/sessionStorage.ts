import { registerEffect } from "../core"

registerEffect<[string]>("getSessionStorage", (key) => {
  window.sessionStorage.getItem(key)
})

registerEffect<[string, string]>("setSessionStorage", (key, value) => {
  window.sessionStorage.setItem(key, value)
})
