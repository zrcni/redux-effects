import { registerCoeffect } from "../core"

export interface StateCoeffect<S = any> {
  state: S
}

registerCoeffect("state", (_: any, state: any) => state)
