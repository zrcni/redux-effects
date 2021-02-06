I wanted to experiment with creating something simpler than Redux Saga and Redux Observables that could execute side effects from dispatched actions. It's obviously much less flexible than the previously mentioned libraries. They're great for complex flows and long running processes.

I also ended up creating basically a JavaScript [re-frame](https://github.com/day8/re-frame) in [another branch](https://github.com/zrcni/redux-effects/tree/effectrix).

The library code is in [src/lib/redux-effects](./src/lib/redux-effects)

```js
// dependencies can be provided to the enhancer when the Redux store is created
createStore(
  reducer,
  initialState,
  createReduxEffectEnhancer({ someDependency })
)
```

```js
const effect = createReduxEffect("someAction", (action, context) => {
  context.someDependency.doSomething(action.payload)
})

// Effects can be registered by calling registerEffect.
// They can be registered before the store has been created.
registerReduxEffect(effect)

// If you want to define and register at once, you can provide
// the action type and the callback instead of the created effect.
// You might want to do this for effects that are always active.
registerReduxEffect("someAction", callback)
```

```js
// There's also a React hook for effects that
// are only active while a component is rendered
useReduxEffect(effect)

// and a higher order component
withReduxEffect(effect)
```
