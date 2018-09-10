let DefaultState = {
index:1


}
const ViewReducer =(state = DefaultState, action) => {
  const index = state.index
  switch (action.type) {
    case "ADD_STEP":
    if (index >= 8){return state }
    else{
      return{
        ...state,
        index: index + 1
      }
    }


    case "MIN_STEP":

    if(index <= 1)
    {
      return state
    }
    else
    {
      return{
        ...state,
        index : index - 1
      }
    }

    default:
      return state;

  }
}
export default ViewReducer;
