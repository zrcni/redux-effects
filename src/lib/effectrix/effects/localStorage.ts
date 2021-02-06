import { registerEffect } from "../core"

registerEffect<[string]>("getLocalStorage", (key) => {
  window.localStorage.getItem(key)
})

registerEffect<[string, string]>("setLocalStorage", (key, value) => {
  window.localStorage.setItem(key, value)
})
