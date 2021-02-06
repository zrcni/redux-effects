import {
  createContext,
  FC,
  useContext,
  useEffect,
  useReducer,
  useRef,
} from "react"
import { Action, Store } from "../core"

const EffectrixContext = createContext(undefined as any)

function useEffectContext<S = any>() {
  const context = useContext<Store<S>>(EffectrixContext)
  if (!context) {
    throw new Error("useDispatch must be used within EffectrixProvider")
  }
  return context
}

export function useDispatch(): (action: Action) => void {
  const context = useEffectContext()
  return context.dispatch
}

export function useSelector<T = any, S = any>(
  selector: (state: S) => T,
  equalityFn?: (value: T, prevValue: T) => boolean
) {
  const context = useEffectContext()
  const [, forceRender] = useReducer((v) => v + 1, 0)
  const valueRef = useRef(selector(context.getState()))

  useEffect(() => {
    return context.subscribe((state) => {
      const prevValue = valueRef.current
      const value = selector(state)

      const isEqual = equalityFn
        ? equalityFn(value, prevValue)
        : value === prevValue

      valueRef.current = value

      if (!isEqual) {
        forceRender()
      }
    })
  }, [context, equalityFn, selector])

  return valueRef.current
}

export const EffectrixProvider: FC<{ store: any }> = (props) => {
  return (
    <EffectrixContext.Provider value={props.store}>
      {props.children}
    </EffectrixContext.Provider>
  )
}
