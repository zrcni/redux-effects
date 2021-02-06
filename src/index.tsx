import React from "react"
import ReactDOM from "react-dom"
import { Provider as ReduxProvider } from "react-redux"
import { createStore } from "./redux"
import App from "./App"
import analyticsClient from "./analyticsClient"
import "./index.css"
import { createDefaultState } from "./redux/defaultState"
import "./effects"

const store = createStore(createDefaultState(), { analyticsClient })

ReactDOM.render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <App />
    </ReduxProvider>
  </React.StrictMode>,
  document.getElementById("root")
)
