import React, { Component } from 'react';
import Step1 from '../../container/step1/';
import Step2 from '../../container/step2/';
import Step3 from './step3/step3';
import Step4 from './step4/step4';
import Step5 from './step5/step5';
import Step6 from './step6/step6';
import Step7 from './step7/step7';

import HomePage from'../../container/homepage/'
class StepPage extends Component {

renderPage=(i)=>{
    if(i===1){
      return(
        <div>
           <Step1/>
        </div>
      )
    }
    else if(i===2)
    {
      return(
        <div>
        <Step2/>
        </div>
      )
    }
    else if(i===3)
    {
        return(
          <div>
          <Step3/>
          </div>
      )
    }
    else if (i===4){
      return(
        <div>
        <Step4/>
        </div>
      )
    }
    else if(i===5){
      return(
        <div>
        <Step5/>
        </div>
      )
    }
    else if(i===6){
      return(
        <div>
        <Step6/>
        </div>
      )
    }
    else if (i===7){
      return(
        <div>
        <Step7/>
        </div>
      )
    }
    else if (i===8){
      return(
        <div>
        <HomePage/>
        </div>
      )
    }
  }

  render(){

    return(
      <div className="step-page">
         {this.renderPage(this.props.steps)}
      </div>
    )

  }
}

export default StepPage
