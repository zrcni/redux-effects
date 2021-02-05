import { AnyAction } from "redux"

export function createReducer() {
  return (state: any, action: AnyAction) => {
    switch (action.type) {
      default:
        return state
    }
  }
}
