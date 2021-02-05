import { EffectHandler } from "../../lib/redux-effects/EffectHandler"
import { createStore } from "../../redux"
import { clickElement } from "../../redux/actions"
import sendMetricOnElementClick from "../sendMetricOnElementClick"

describe("sendMetricOnElementClick", () => {
  it("effect invokes analyticsClient.click", () => {
    const analyticsClient = {
      click: jest.fn(),
    }
    const store = createStore(undefined, { analyticsClient })

    store.registerEffect(sendMetricOnElementClick)

    const element = document.createElement("button")
    store.dispatch(clickElement(element))
    expect(analyticsClient.click).toHaveBeenCalledWith(element)
  })
})
