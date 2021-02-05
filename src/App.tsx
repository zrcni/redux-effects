import React from "react"
import logo from "./logo.svg"
import "./App.css"
import { useDispatch } from "react-redux"
import { elementClicked } from "./redux/actions"

function App() {
  const dispatch = useDispatch()

  function onClick(e: any) {
    dispatch(elementClicked(e.currentTarget))
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p id="instruction" onClick={onClick}>
          Clicking some elements prints something in the console.
        </p>
        <button id="the-only-button" onClick={onClick}>
          Click me
        </button>
      </header>
    </div>
  )
}

export default App
