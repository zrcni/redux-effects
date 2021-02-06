import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import "./index.css"
import "./coeffects"
import "./effects"
import "./events"
import { createStore } from "./store"
import { EffectrixProvider } from "./lib/effectrix/react"
import { initializeState } from "./actions"

const store = createStore()

store.dispatch(initializeState())

ReactDOM.render(
  <React.StrictMode>
    <EffectrixProvider store={store}>
      <App />
    </EffectrixProvider>
  </React.StrictMode>,
  document.getElementById("root")
)
