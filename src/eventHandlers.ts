export function sendClickMetric(action: any, context: any) {
  context.analyticsClient.click(action.payload.element)
}
