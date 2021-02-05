export function elementClicked(element: HTMLElement) {
  return {
    type: "elementClicked",
    payload: { element },
  }
}

elementClicked.type = "elementClicked"

export interface ElementClickedAction {
  type: "elementClicked"
  payload: { element: HTMLElement }
}
