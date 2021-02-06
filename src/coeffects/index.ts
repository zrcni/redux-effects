import "../lib/effectrix/coeffects/getLocalStorage"
import { registerCoeffect } from "../lib/effectrix"
import analyticsClient from "../analyticsClient"

registerCoeffect("analyticsClient", () => analyticsClient)
