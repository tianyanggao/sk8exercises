export function addDays(){
 return{
  type: 'ADD_DAYS'

 }
}

export function deleteDays(){
 return{
  type: 'DELETE_DAYS'
 }
}

export function selectExercisePlace(exerciseplace){
  return{
    type:'ADD_EXERCISE_PLACE',
    payload:exerciseplace,
  }
}
