import { useEffect } from "react"
import { useStore } from "react-redux"
import { Action } from "redux"
import { StoreWithEventEnhancer } from "./enhancer"

function useReduxEvent(
  actionType: string,
  callback: (action: Action, context: { getState: () => any }) => any
) {
  const store = useStore() as StoreWithEventEnhancer

  useEffect(() => {
    function cb(action: Action, context: any) {
      callback(action, context)
    }

    store.on(actionType, cb)

    return () => {
      store.off(actionType, cb)
    }
  }, [actionType, callback, store])
}

export default useReduxEvent
