import { useState } from "react";
import { useWorkoutContext } from "../hooks/useWorkoutContext";

const WorkOutForm=()=>{
    const [title,setTitle]=useState("")
    const [load,setLoad]=useState("")
    const [reps,setReps]=useState("")
    const [error,setError]=useState(null)
    const [empty,setEmpty]=useState([])
    const {dispatch}=useWorkoutContext()
    const handleSubmit=async(e)=>{
       e.preventDefault();
       const workout={title,load,reps}
       const response=await fetch("/api/workouts",{
        method:"POST",
        body:JSON.stringify(workout),
        headers:{
            "Content-Type":"application/json"
        }
       })
       const json=await response.json()
       if(!response.ok){
        setError(json.error)
        // console.log(json.emptyFlieds);
        setEmpty(json.emptyFlieds)

       }
       if(response.ok){
        dispatch({type:"CREATE_WORKOUT",payload:json})
        setError(null)
        setLoad("")
        setReps("")
        setTitle("")
        setEmpty([])
        console.log("new Workout added",json);
       }
    }
    return (
        <div>
              <form  className="create" onSubmit={handleSubmit}>
        <h3>Add a new Workout</h3>
        <label htmlFor="">Exercise Title</label>
        <input type="text" onChange={(e)=>{
            setTitle(e.target.value)
         }} value={title}
         className={empty.includes('title') ? 'error' : ''}
         />
        <label htmlFor="">Load in(kg)</label>
        <input type="number" onChange={(e)=>{
            setLoad(e.target.value)
        }} value={load} className={empty.includes('load') ? 'error' : ''}/>
        <label htmlFor="">Reps</label>
        <input type="number" onChange={(e)=>{
            setReps(e.target.value)
        }} value={reps}
        className={empty.includes('reps') ? 'error' : ''} />
        <button >Add WorkOut</button>
        {error&&<div className="error">"Field All Fields"</div>}
    </form>
        </div>
    )
   
}
export default WorkOutForm;