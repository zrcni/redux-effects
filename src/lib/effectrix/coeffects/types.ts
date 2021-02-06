export interface StateCoeffect<S = any> {
  state: S
}

export interface GetLocalStorageCoeffect {
  getLocalStorage(key: string): string | null
}

export interface GetSessionStorageCoeffect {
  getLocalStorage(key: string): string | null
}
