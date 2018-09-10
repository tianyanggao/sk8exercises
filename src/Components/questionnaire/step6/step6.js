import React,{ Component} from 'react';
import { List} from 'antd-mobile';
import {connect} from 'react-redux';
// import Stepper from'./stepper';
// import Progressicon from'./progress';
// import Stepicon from './stepicon';
import {  Checkbox} from 'antd-mobile';
import './step6.css'


const CheckboxItem = Checkbox.CheckboxItem;


class Step6 extends Component{
  onChange = (val) => {
      console.log(val);
    }

  render(){
    const data = [
          { value: 0, label: 'No pain' },
          { value: 1, label: 'Rarely in pain' },
          { value: 2, label: 'Sometimes in pain' },
          { value: 3, label: 'Regularly in pain'},
          { value: 4, label: 'Always in pain'}
        ];
    const data2 = [
              { value: 0, label: 'Poor' },
              { value: 1, label: 'Fairly good' },
              { value: 2, label: 'Good' },
              { value: 3, label: 'Excellent'},
            ];
      return(
       <div>


         <div className="tips-step4">
          <p>The following information is anonymous</p>
         </div>
         <p>Healthy and Wellbeing</p>

         <List renderHeader={() => 'Do you experience injury or posture related pain at work?'}>
        {data.map(i => (
          <CheckboxItem key={i.value}
          onChange={() => this.onChange(i.value)}>
            {i.label}
          </CheckboxItem>
        ))}
        </List>

        <List renderHeader={() => 'How do you feel your health and wellbeing is right now?'}>
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



export default Step6
