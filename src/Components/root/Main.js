import React,{Component} from 'react'
import SplashScreen from'../launch/'
import{Route,Switch} from 'react-router-dom'
import StartScreen from '../Startscreen/'
import Register from '../../container/Register/'
import Login from '../../container/login/'
import Questionnaire from '../questionnaire/viewContainer/'
import HomePage from'../../container/homepage/'
// import ResetPassword from './ResetPassword'
// import Step1 from '../../container/step1/'
// import Step2 from '../../container/step2/'
// import Step3 from '../questionnaire/step3'
// import Step4 from '../questionnaire/step4'
// import Step5 from '../questionnaire/step5'
// import Step6 from '../questionnaire/step6'
// import Step7 from '../questionnaire/step7'
// const homeSize={
//   background-image: url(../background.png);
// }
class Main extends Component{
  render(){
    return(
      <div >
           <Switch>

            <Route exact path ="/" render={()=>(
              <SplashScreen/>
            )}/>

            <Route exact path="/StartScreen" render ={()=>(
              <StartScreen/>
            )}/>

            <Route exact path ="/Register"  render ={()=>(
                <Register/>
            )}/>

            <Route exact path ="/Login" render={()=>(
                <Login/>
            )}/>


           <Route exact path="/Questionnaire" render={()=>(
                <Questionnaire/>
            )}/>
            <Route exact path="/HomePage" render={()=>(
                 <HomePage/>
             )}/>


           </Switch>
    </div>
  )
}
}

export default Main
