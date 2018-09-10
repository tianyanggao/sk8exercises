export function addName(name){

  return{
  type:'ADD_NAME',
  payload:name,
}
}

export function selectAge(age){
  return{
  type:'SELECT_AGE',
  payload: age,
}
}
export function selectGender(gender){
  return{
  type:'SELECT_GENDER',
  payload:gender,
}
}
export function selectWeight(weight){
  return{
  type:'SELECT_WEIGHT',
  payload:weight,
}}
