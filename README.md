I wanted something simpler than Redux Saga and Redux Observables that could execute side effects from dispatched actions.

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

// Effects can be registered by calling registerEffect
// They can be registered before the store has been created.
registerReduxEffect(effect)

// If you want to define and register at once, you can provide
// the action type and the callback instead of the created effect.
// You might want to do this for effects that are always active.
registerReduxEffect("someAction", callback)
```

```js
// There's also a React hook
useReduxEffect(effect)

// and a higher order component
withReduxEffect(effect)
```
