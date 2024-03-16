import { useWorkoutContext } from "../hooks/useWorkoutContext";
const WorkoutDetails=({workout})=>{

 const {workouts,dispatch}=useWorkoutContext();
    return <div className="workout-details">
        <h4>{workout.title}</h4>
        <p><strong>Load (kg):</strong>{workout.load}</p>
        <p><strong>Reps:</strong>{workout.reps}</p>
        <p>{workout.createdAt}</p>
        <button onClick={async()=>{
            const url=`/api/workouts/${workout._id}`
            const response=await fetch(url,{
                method:"DELETE",
                headers:{
                    "Content-Type":"application/json"
                }
            });
            // const json=await response.json();
            if(!response.ok){
                console.log("error");
            }
          const newData=workouts.filter((work)=>{
            return workout._id!==work._id;
          })
          dispatch({type:"DELETE_WORKOUT",payload:newData})

            
        }}>delete</button>
    </div>
}
export default WorkoutDetails;