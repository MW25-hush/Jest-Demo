"use client";
import { context } from "@/utils/context";
import useCustom from "@/utils/useCusotm";
import { useContext, useReducer, useState } from "react";

interface typeState {
  age: number;
}

const initialValue: typeState = {
  age: 42,
};

export default function Home({
  name,
  password,
}: {
  name?: string;
  password?: string;
}) {
  const [visible, setVisible] = useState(false);
  // const level = useContext(context);
  // const re = useCustom();
  // // Define the action types
  // type Action =
  //   | { type: "increment"; payload: number }
  //   | { type: "decrement"; payload: number };

  // // Define the reducer function
  // const reducer = (state: typeState, action: Action): typeState => {
  //   switch (action.type) {
  //     case "increment":
  //       return { ...state, age: state.age + action.payload };
  //     case "decrement":
  //       return { ...state, age: state.age - action.payload };
  //     default:
  //       return state;
  //   }
  // };

  // const [state, dispatch] = useReducer(reducer, initialValue);

  return (
    // <context.Provider value={level}>
    <div>
      <h1>Home</h1>
      <h1>{name}</h1>
      <h1>{password}</h1>
      {/* <h1>{level}</h1> */}
      {/* <h1>{re}</h1> */}
      <section>
        <p>Text String Test</p>
      </section>

      <div>
        <button onClick={() => setVisible(true)}>Show Heading</button>
        {visible && <h1>This is a visible heading</h1>}
      </div>
    </div>
    // </context.Provider>
  );
}
