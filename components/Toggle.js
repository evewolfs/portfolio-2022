import React from 'react'
import { useState } from "react";

const Toggle = (style) => {
  const [state, setState] = useState(0);
  function toggleState() {
    if (state === 0 || state === 1) {
      setState(state + 1);
    } else {
      setState(0);
    }
  }

  function betterToggleState() {
    setState((prevState) => (prevState + 1) % 3);
  }
  let colortoshow;
  if (state === 0) {
    colortoshow = "red";
  } else if (state === 1) {
    colortoshow = "green";
  } else {
    colortoshow = "yellow";
  }

  return (
    <button
        onClick={betterToggleState}
        style={{
          backgroundColor: colortoshow
        }}
      >
        I will toggle between 3 states
      </button>
  )
}

export default Toggle