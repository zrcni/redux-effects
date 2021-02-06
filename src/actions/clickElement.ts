import { Action } from "../lib/effectrix"

export function clickElement(element: HTMLElement): ClickElementAction {
  return {
    type: "clickElement",
    payload: { element },
  }
}

clickElement.type = "clickElement"

export interface ClickElementAction extends Action<"clickElement"> {
  payload: { element: HTMLElement }
}
