import React,{ Component} from 'react';
import { List} from 'antd-mobile';
import {connect} from 'react-redux';
// import Stepper from'./stepper';
// import Progressicon from'./progress';
// import Stepicon from './stepicon';
import {  Checkbox} from 'antd-mobile';
import './step4.css'


const CheckboxItem = Checkbox.CheckboxItem;


class Step4 extends Component{
  onChange = (val) => {
      console.log(val);
    }

  render(){
    const data = [
          { value: 0, label: 'Rounded shoulder and forward head' },
          { value: 1, label: 'Anterior pelvic tilt' },
          { value: 2, label: 'Sway posture' },
          { value: 3, label: 'None'},
        ];

      return(
       <div>


         <div>
          <p >Posture Correction</p>
         </div>
         <p>What is your current rehab focus?</p>
         <List className="step4">
        {data.map(i => (
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
