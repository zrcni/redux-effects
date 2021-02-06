import { ReduxState } from "../../types"

export function selectUserId(state: ReduxState) {
  return state.userId
}
