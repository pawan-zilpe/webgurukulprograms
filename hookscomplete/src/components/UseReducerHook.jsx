import React, { useReducer } from "react";
const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1, showText: state.showText };
    case "Toggle":
      return { count: state.count, showText: !state.showText };
    default:
      return state;
  }
};

const UseReducerHook = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0, showText: true });
  return (
    <div>
      <h1>{state.count}</h1>

      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <button onClick={() => dispatch({ type: "Toggle" })}>Toggle</button>
      <button
        onClick={() => {
          dispatch({ type: "INCREMENT" });
          dispatch({ type: "Toggle" });
        }}
      >
        Both
      </button>
      {state.showText && <p>This is a text</p>}
    </div>
  );
};

export default UseReducerHook;
