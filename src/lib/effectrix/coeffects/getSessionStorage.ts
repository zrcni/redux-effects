import { registerCoeffect } from "../core"

registerCoeffect("getSessionStorage", () => {
  return function getSessionStorage(key: string) {
    return window.sessionStorage.getItem(key)
  }
})
