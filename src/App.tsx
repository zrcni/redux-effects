import React from "react"
import logo from "./logo.svg"
import "./App.css"
import { useSelector, useDispatch } from "./lib/effectrix/react"
import { clickElement, updateInputText } from "./actions"
import { selectInputText } from "./selectors"

function App() {
  const inputText = useSelector(selectInputText)
  const dispatch = useDispatch()

  function onClick(e: any) {
    dispatch(clickElement(e.currentTarget))
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p id="instruction" onClick={onClick}>
          Clicking some elements prints something in the console.
        </p>
        <input
          value={inputText}
          onChange={(e) => dispatch(updateInputText(e.currentTarget.value))}
        />
        <button id="the-only-button" onClick={onClick}>
          Click me
        </button>
      </header>
    </div>
  )
}

export default App
