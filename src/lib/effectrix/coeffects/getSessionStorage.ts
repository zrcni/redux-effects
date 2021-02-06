import { registerCoeffect } from "../core"

export interface GetSessionStorageCoeffect {
  getLocalStorage(key: string): string | null
}

registerCoeffect("getSessionStorage", (key: string) => {
  return window.sessionStorage.getItem(key)
})
