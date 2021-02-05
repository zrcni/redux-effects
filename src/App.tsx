import React from "react"
import logo from "./logo.svg"
import "./App.css"
import useReduxEvent from "./lib/redux-events/hook"
import { sendClickMetric } from "./eventHandlers"
import { useDispatch } from "react-redux"
import { elementClicked } from "./redux/actions"

function App() {
  useReduxEvent(elementClicked.type, sendClickMetric)
  const dispatch = useDispatch()

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p
          id="instruction"
          onClick={(e) => dispatch(elementClicked(e.currentTarget))}
        >
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button
          id="the-only-button"
          onClick={(e) => dispatch(elementClicked(e.currentTarget))}
        >
          Click me
        </button>
      </header>
    </div>
  )
}

export default App
