import { registerCoeffect } from "../core"

registerCoeffect("getLocalStorage", () => {
  return function getLocalStorage(key: string) {
    return window.localStorage.getItem(key)
  }
})
