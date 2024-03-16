import { createContext } from "react";
import { useReducer } from "react";
export const WorkoutContext=createContext()
//the state value contains previouse state
export const WorkoutReducer=(state,action)=>{
    switch(action.type){
        case "SET_WORKOUTS":
            return {workouts:action.payload}
        case "CREATE_WORKOUT":
            return {workouts:[action.payload,...state.workouts]}
        case "DELETE_WORKOUT":
            return {workouts:action.payload}
        default:
            return state
    }

}
export const WorkoutContextProvider=({children})=>{
    const [state,dispatch]=useReducer(WorkoutReducer,{
        workouts:null
    })
    return <WorkoutContext.Provider value={{...state,dispatch}}>
        {children}
    </WorkoutContext.Provider>
}
//children represents the App Component
//we can dyamically send the data using react Reducer to the Provider
//intialstate is an object