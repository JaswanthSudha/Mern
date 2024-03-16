import { useContext } from "react";
import { WorkoutContext } from "../context/WorkoutContext";
export const useWorkoutContext=()=>{
    const context=useContext(WorkoutContext)//this context will return us the state and dispatch of the workkout
    if(!context){
        throw Error("Use WorkoutContext inside the WorkOutContextProvider only")
    }
    return context
}
