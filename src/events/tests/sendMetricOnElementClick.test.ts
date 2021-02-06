import { createStore } from "../../store"
import { clickElement } from "../../actions"
import { registerCoeffect, unregisterCoeffects } from "../../lib/effectrix"
import "../sendMetricOnElementClick"

describe("sendMetricOnElementClick", () => {
  afterEach(() => unregisterCoeffects())

  it("effect invokes analyticsClient.click", () => {
    const analyticsClient = {
      click: jest.fn(),
    }

    const store = createStore()

    registerCoeffect("analyticsClient", analyticsClient)

    const element = document.createElement("button")
    store.dispatch(clickElement(element))
    expect(analyticsClient.click).toHaveBeenCalledWith(element)
  })
})
