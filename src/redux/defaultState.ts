/* eslint-disable import/no-anonymous-default-export */
export function createDefaultState() {
  return {
    inputText: localStorage.getItem("input-text") || "",
  }
}
