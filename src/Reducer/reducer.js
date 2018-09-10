import {combineReducers} from 'redux';
import Step2Reducer from'../container/step2/reducer'
import Step1Reducer from'../container/step1/reducer'
import ViewReducer from'../Components/questionnaire/viewContainer/reducer'
import LoginReducer from'../container/login/reducer'
import RegisterContainer from'../container/Register/reducer'
//here is for put all seperate data together into a .js file Reducer
//now Reducer represnts data union

const Reducer = combineReducers({
  Step1Reducer,
  Step2Reducer,
  ViewReducer,
  LoginReducer,
  RegisterContainer,


})

export default Reducer;
