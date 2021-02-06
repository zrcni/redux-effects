import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import "./index.css"
import "./coeffects"
import "./effects"
import "./events"
import { createStore } from "./store"
import { EffectrixProvider } from "./lib/effectrix/react"

const store = createStore()

ReactDOM.render(
  <React.StrictMode>
    <EffectrixProvider store={store}>
      <App />
    </EffectrixProvider>
  </React.StrictMode>,
  document.getElementById("root")
)
