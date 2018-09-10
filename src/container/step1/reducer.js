let DefaultState = {

  name:'',
  gender:'',
  age:'',
  weight:'',

}
const Step1Reducer =(state = DefaultState, action) => {
  switch (action.type) {
    case "ADD_NAME":
    return {
      ...state,
      name: action.payload
    }

    case "SELECT_AGE":
    return {
      ...state,
      age: action.payload,
    }

    case "SELECT_GENDER":

    return {
      ...state,
      gender:action.payload
    }
    case "SELECT_WEIGHT":
    return {
      ...state,
      weight: action.payload,
    }
    default:
      return state;

  }
}
export default Step1Reducer;
