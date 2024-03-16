import React from "react";
// import ComponentB from "./components/ComponentB";
import { useReducer } from "react";
export const userContext =React.createContext();
export default function App() {
  const intialState={count:0}
  const reducer=(state,action)=>{
    switch(action.type){
      case "increment":
        return {count:state.count+1}
      case "decrement":
        return {count:state.count-1}
    }

  }
  const [state,dispatch]=useReducer(reducer,intialState)
  return <div style={{
    textAlign:"center"
  }}>
    <userContext.Provider value={"jashu"}>
      <p>{state.count}</p>
      <button onClick={()=>{
        dispatch({type:"increment"})
      }}>+</button>
      <button onClick={()=>{
        dispatch({type:"decrement"})
      }}>-</button>
    </userContext.Provider>
  </div>;
}
