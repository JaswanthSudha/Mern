import { useEffect } from "react";
import WorkoutDetails from "../components/WorkoutDetails";
import WorkOutForm from "../components/WorkoutForm";
import { useWorkoutContext } from "../hooks/useWorkoutContext";
const Home = () => {
  const {workouts,dispatch}=useWorkoutContext()
   useEffect(()=>{
    const fetchWorkOut=async()=>{
      const response=await fetch("api/workouts")
      const json=await response.json()
      if(response.ok){
        dispatch({type:"SET_WORKOUTS",payload:json})
      }
     }
    fetchWorkOut();
   },[dispatch]) 
  return (
    <div className="home">
      <div className="workouts">
        {(workouts)?workouts.map((workout)=>{
                return <WorkoutDetails key={workout._id} workout={workout}/>
            }):<h1>No WorkOuts</h1>
        }
      </div>
      <WorkOutForm/>

    </div>
  );
};
export default Home;
