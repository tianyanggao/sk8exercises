import React,{ Component} from 'react';
import { List } from 'antd-mobile';
import {connect} from 'react-redux';
// import Stepper from'./stepper';
// import Progressicon from'./progress';
// import Stepicon from './stepicon';
import {  Checkbox} from 'antd-mobile';
import './step5.css'


const CheckboxItem = Checkbox.CheckboxItem;


class Step4 extends Component{
  onChange = (val) => {
      console.log(val);
    }

  render(){
    const data = [
          { value: 0, label: 'Stress free' },
          { value: 1, label: 'Minimally stressed' },
          { value: 2, label: 'Noderately stressed' },
          { value: 3, label: 'Highly stressed'},
          { value: 4, label: 'Extremely stressed'}
        ];
    const data2 = [
              { value: 0, label: 'None of the time' },
              { value: 1, label: 'Rarely' },
              { value: 2, label: 'Half the time' },
              { value: 3, label: 'Most of the time'},
              { value: 4, label: 'All the time'}
            ];
      return(
       <div>


         <div className="tips-step4">
          <p>The following information is anonymous</p>
         </div>
         <p>Stree and Productivity</p>

         <List className="step5">
        {data.map(i => (
          <CheckboxItem key={i.value}
          onChange={() => this.onChange(i.value)}>
            {i.label}
          </CheckboxItem>
        ))}
        </List>
        <p>In the last 4 weeks,I have felt productive...</p>
        <List>
       {data2.map(i => (
         <CheckboxItem key={i.value}
         onChange={() => this.onChange(i.value)}>
           {i.label}
         </CheckboxItem>
       ))}
       </List>
      
   </div>
 );
 }
}



export default Step4
