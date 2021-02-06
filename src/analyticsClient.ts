/* eslint-disable import/no-anonymous-default-export */

import { AnalyticsClient } from "./types"

export default {
  // just pretend this sends events to a server, okay?
  click(userId: string, element: HTMLElement) {
    if (!element.id) return

    console.log(
      `${element.nodeName.toLowerCase()} ${element.id} was clicked by ${userId}`
    )
  },
} as AnalyticsClient
