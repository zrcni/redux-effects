import { registerCoeffect } from "../core"

export interface GetLocalStorageCoeffect {
  getLocalStorage(key: string): string | null
}

registerCoeffect("getLocalStorage", (key: string) => {
  return window.localStorage.getItem(key)
})
