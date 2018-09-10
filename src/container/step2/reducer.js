const initialState = {
  count:0,
  exercisePlace:" "
}

const Step2Reducer = (state = initialState, action) => {
    const count = state.count;
       switch (action.type) {
        case 'ADD_DAYS':
            if (count >= 7) { return state }
            else {
              return {
                ...state,
                count: count + 1 }
              }

        case 'DELETE_DAYS':
            if (count <= 0) { return state }
            else {
              return {
                ...state,
                count: count - 1 }
              }

        case 'ADD_EXERCISE_PLACE' :
             return{
                ...state,
                exercisePlace: action.payload
               }

        default:
            return state;
    }
}
export default Step2Reducer;
