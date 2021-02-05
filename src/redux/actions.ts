import { Action } from "redux"

export function elementClicked(element: HTMLElement): ElementClickedAction {
  return {
    type: "elementClicked",
    payload: { element },
  }
}

elementClicked.type = "elementClicked"

export interface ElementClickedAction extends Action<"elementClicked"> {
  payload: { element: HTMLElement }
}
