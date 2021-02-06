import React from "react"
import logo from "./logo.svg"
import "./App.css"
import { useDispatch, useSelector } from "react-redux"
import { clickElement, updateInputText } from "./redux/actions"
import { selectUserId } from "./redux/selectors"

function App() {
  const inputText = useSelector(selectUserId)
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
