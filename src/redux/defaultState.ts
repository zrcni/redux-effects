/* eslint-disable import/no-anonymous-default-export */
export function createDefaultState() {
  return {
    userId: '123',
    inputText: localStorage.getItem("input-text") || "",
  }
}
