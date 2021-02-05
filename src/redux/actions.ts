export function elementClicked(element: any) {
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
