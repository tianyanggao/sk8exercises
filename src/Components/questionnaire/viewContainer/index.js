import React, { Component } from 'react';
import Questionnaire from '../stepPage'
import {connect} from 'react-redux';
import Progress from'../progress'
import Stepicon from'../stepicon'
import Stepper from'../stepper'
import * as actions from'./action'
import {bindActionCreators} from 'redux';
import Step1 from'../step1/step1'

class ViewContainer extends Component{
    render() {
        return (
            <div>
            <Progress
            steps= {this.props.steps}
            />

            <Stepicon
            steps= {this.props.steps}
            />

            <Questionnaire
            steps= {this.props.steps}
            />


            <Stepper
             steps={this.props.steps}
             addStep= {this.props.addStep}
             minStep= {this.props.minStep}
              />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        steps: state.ViewReducer.index,
    }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(actions, dispatch)

}

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(ViewContainer);
