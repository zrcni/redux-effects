/* eslint-disable import/no-anonymous-default-export */

export default {
  // just pretend this sends events to a server, okay?
  click(element: any) {
    if (!element.id) return

    console.log(`${element.nodeName.toLowerCase()} ${element.id} was clicked`)
  },
}
