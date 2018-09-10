import React,{ Component} from 'react';
import { List } from 'antd-mobile';



import {connect} from 'react-redux';

// import Stepper from'./stepper';
// import Progressicon from'./progress';
// import Stepicon from './stepicon';

import {  Checkbox} from 'antd-mobile';
import './step3.css'


const CheckboxItem = Checkbox.CheckboxItem;


class Step3 extends Component{
  onChange = (val) => {
      console.log(val);
    }

  render(){
    const data = [
          { value: 0, label: 'Lower Back Pain' },
          { value: 1, label: 'Neck Pain' },
          { value: 2, label: 'Shoulder Pain' },
          { value: 3, label: 'Hip Pain'},
          { value: 4, label: 'None'}
        ];
      return(
       <div >


         <div>
          <p className="title" >Injury Management</p>
          </div>
          <p>What is your current rehab focus?</p>
         <List className="step3">
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



export default Step3
