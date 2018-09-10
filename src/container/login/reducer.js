//this file is for getting the email and password
let initialState=
  {
    email:'',
    password:'',

  }

const LoginReducers = (state=initialState, action)=>{


if (action.type==="ADD_EMAIL"){
    //console.log("add password: "+ action.payload)
    return {
      ...state,
      email: action.payload
    }
  }
  else if (action.type==="ADD_PASSWORD"){
    //console.log("add token: "+ action.payload)
    return {
      ...state,
      password: action.payload
    }
  }
  // else if (action.type==="CATCH_ERROR"){
  //   //console.log("add token: "+ action.payload)
  //   return {
  //     ...state, error: action.payload
  //   }
  // }
  // else if (action.type==="FETCH_RESPONSE"){
  //   //console.log("add token: "+ action.payload)
  //   return {
  //     ...state, fetch: action.payload
  //   }
  // }
  return state;
}
export default LoginReducers;
