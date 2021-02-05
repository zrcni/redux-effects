import { registerReduxEffect } from "../lib/redux-effects"
import sendMetricOnElementClick from "./sendMetricOnElementClick"
import persistInputText from "./persistInputText"

registerReduxEffect(sendMetricOnElementClick)
registerReduxEffect(persistInputText)
