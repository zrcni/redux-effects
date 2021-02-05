import { Action } from "redux"

export function createReducer() {
  return (state: any, action: Action) => {
    switch (action.type) {
      default:
        return state
    }
  }
}
