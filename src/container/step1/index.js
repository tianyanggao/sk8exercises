import React,{ Component} from 'react'

import Step1 from'../../Components/questionnaire/step1/step1';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from'./action'


class Step1Container extends Component{


  render(){

    return (
      <div>

        <Step1

          name={this.props.name}
          addName={this.props.addName}

          gender_={this.props.gender_}
          selectGender={this.props.selectGender}

          age_={this.props.age_}
          selectAge={this.props.selectAge}

          weight_={this.props.weight_}
          selectWeight={this.props.selectWeight}/>


    </div>
    )}

}
function mapStateToProps(state){
  return {
    name: state.Step1Reducer.name,
    gender_:state.Step1Reducer.gender,
    weight_:state.Step1Reducer.weight,
    age_: state.Step1Reducer.age,
  }
}
function mapDispatchToProps(dispatch){
  return bindActionCreators(actions, dispatch)

}



 export default connect(
   mapStateToProps,
   mapDispatchToProps
 )(Step1Container);
