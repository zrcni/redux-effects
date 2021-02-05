import { registerReduxEffect } from "../lib/redux-effects"
import sendMetricOnElementClick from "./sendMetricOnElementClick"

registerReduxEffect(sendMetricOnElementClick)
