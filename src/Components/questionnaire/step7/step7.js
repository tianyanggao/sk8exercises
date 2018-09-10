import React,{ Component} from 'react';
import { List } from 'antd-mobile';
import {connect} from 'react-redux';
// import Stepper from'./stepper';
// import Progressicon from'./progress';
// import Stepicon from './stepicon';
import {  Checkbox} from 'antd-mobile';
import './step7.css'


const CheckboxItem = Checkbox.CheckboxItem;


class Step7 extends Component{
  onChange = (val) => {
      console.log(val);
    }

  render(){
    const data = [
          { value: 0, label: 'Sendentary' },
          { value: 1, label: 'Lightly active' },
          { value: 2, label: 'Moderately active' },
          { value: 3, label: 'Very active'},
          { value: 4, label: 'Extremely active'}
        ];
    const data2 = [
              { value: 0, label: 'No exercise' },
              { value: 1, label: 'Light exercise' },
              { value: 2, label: 'Moderate exercise' },
              { value: 3, label: 'Hard exercise'},
              { value: 3, label: 'Intense exercise'},
            ];
      return(
       <div>


         <div className="tips-step4">
          <p>The following information is anonymous</p>
         </div>
         <p>Healthy and Wellbeing</p>

         <List renderHeader={() => 'How active are you on a daily basis?'}>
        {data.map(i => (
          <CheckboxItem key={i.value}
          onChange={() => this.onChange(i.value)}>
            {i.label}
          </CheckboxItem>
        ))}
        </List>

        <List renderHeader={() => 'How many days per week do you currently exercise?'}>
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



export default Step7
