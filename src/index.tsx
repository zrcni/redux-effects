import React from "react"
import ReactDOM from "react-dom"
import { Provider as ReduxProvider } from "react-redux"
import { createStore } from "./redux"
import App from "./App"
import analyticsClient from "./analyticsClient"
import "./index.css"
import { registerGlobalEffects } from "./effects"

const store = createStore({}, { analyticsClient })

registerGlobalEffects(store)

ReactDOM.render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <App />
    </ReduxProvider>
  </React.StrictMode>,
  document.getElementById("root")
)
