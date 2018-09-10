import React, {Component} from 'react';
import Step2 from'../../Components/questionnaire/step2/step2'
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import Progress from'../../Components/questionnaire/progress';
import Stepicon from '../../Components/questionnaire//stepicon';
import Stepper from'../../Components/questionnaire/stepper'
import * as actions from'./action'

class Step2Container extends Component{

  render(){

    console.log("This is the second page!")
    return(
      <div>

      <Step2
       addDays={this.props.addDays}
       deleteDays={this.props.deleteDays}
       valueDays={this.props.valueDays}

       exercisePlace={this.props.exercisePlace}
       selectExercisePlace={this.props.selectExercisePlace}
      />


    
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    valueDays:state.Step2Reducer.count,
    exercisePlace:state.Step2Reducer.exercisePlace,
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(actions, dispatch);
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Step2Container);
