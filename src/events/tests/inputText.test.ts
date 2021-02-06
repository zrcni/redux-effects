import { registerEffect, unregisterEffects } from "../../lib/effectrix"
import { createStore } from "../../store"
import { updateInputText } from "../../actions"
import { selectInputText } from "../../selectors"
import "../../coeffects"
import "../inputText"
import "../initializeState"

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
    registerEffect<[string, string]>("setLocalStorage", (key, value) => {
      window.localStorage.setItem(key, value)
    })

    const store = createStore()
    const value = "this is text"
    store.dispatch(updateInputText(value))
    expect(window.localStorage.getItem("input-text")).toBe(value)
  })

  it("updateInputText's value is taken from localStorage upon initialization", () => {
    const value = "persisted text"
    window.localStorage.setItem("input-text", value)
    const store = createStore()
    expect(selectInputText(store.getState())).toBe(value)
  })
})
