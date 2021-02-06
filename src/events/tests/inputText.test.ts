import { registerEffect, unregisterEffects } from "../../lib/effectrix"
import { createStore } from "../../store"
import { updateInputText } from "../../actions"
import { selectInputText } from "../../selectors"
import "../inputText"

describe("inputText", () => {
  afterEach(() => {
    window.localStorage.clear()
    unregisterEffects()
  })

  it("updateInputText updates input text in state", () => {
    const store = createStore()
    const value = "this is text"
    store.dispatch(updateInputText(value))
    expect(selectInputText(store.getState())).toBe(value)
  })

  it("updateInputText persists its value in local storage", () => {
    const store = createStore()
    const value = "this is text"

    const mockFn = jest.fn()
    registerEffect("setLocalStorage", mockFn)

    store.dispatch(updateInputText(value))
    expect(mockFn).toHaveBeenCalledWith("input-text", value)
  })

  it("updateInputText's value is taken from localStorage upon initialization", () => {
    const value = "persisted text"
    window.localStorage.setItem("input-text", value)
    const store = createStore()
    expect(selectInputText(store.getState())).toBe(value)
  })
})
