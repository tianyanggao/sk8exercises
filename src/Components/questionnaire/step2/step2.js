import React,{ Component} from 'react';
import { List,WhiteSpace } from 'antd-mobile';

import { Radio } from 'antd-mobile';
import {  Checkbox} from 'antd-mobile';
import './step2.css'
const RadioItem = Radio.RadioItem;
const CheckboxItem = Checkbox.CheckboxItem;


const exercisePlaceArray = [
     { value: 'Gym', label: 'Gym' },
     { value: 'Home', label: 'Home' },
    ];

const trainingGoalsGym= [
       { value: 0, label: 'Muscle size and strength', description:"Weight training principles designed to build muscle and strength." },
       { value: 1, label: 'Fat Loss/Definition', description: "A combination of cardio and weight training to target fat loss and increase muscle definition."},
       { value: 2, label: 'Decrease stress', description:"Using exercise strategies to reduce stress levels and restore balance back in your body."},
       { value: 3, label: 'Improve posture', description:"Utilising specific exercises and weight training to correct postural imbalances."},
     ];

const trainingGoalHome=[
    { value: 0, label: 'Fat Loss/Definition', description: "A combination of cardio and weight training to target fat loss and increase muscle definition."},
    { value: 1, label: 'Decrease stress', description:"Using exercise strategies to reduce stress levels and restore balance back in your body."},
    { value: 2, label: 'Increase fitness', description:"High intensity exercise to develop and increase your overall fitness."},
  ];

class Step2 extends Component{
     state = {
          value: 0,
            };

     onChange = (value) => {
         this.setState({
            value,
            });
       };

    renderPage = (i) => {
         if(i==="Gym"){
           return(<div>
                     <WhiteSpace size="lg"/>
                      <p>Trainning Goals</p>
                        <List renderHeader={() => 'What is your current trainning goal?'}>
                          {trainingGoalsGym.map(i=> (
                        <CheckboxItem key={i.value} onChange={() => this.onChange(i.value)}>
                              {i.label}
                        </CheckboxItem>
                              ))}
                        </List>
                  </div>

           )}
           else if(i==="Home")
           {
             return(<div>
                       <WhiteSpace size="lg"/>
                        <p>Trainning Goals</p>
                          <List renderHeader={() => 'What is your current trainning goal?'}>
                            {trainingGoalHome.map(i=> (
                          <CheckboxItem key={i.value} onChange={() => this.onChange(i.value)}>
                                {i.label}
                          </CheckboxItem>
                                ))}
                          </List>
                    </div>

             )
           }
       }

  render(){
     const {value} = this.state;

      return(
       <div>
          <div >
          <p className="title"> Create Your Program </p>
          <p>How many days per week would you like to exercise?</p>
          </div>

          <div className="App">
               <p>Days</p>
               <button onClick={this.props.deleteDays}>-</button>
               <input className="daysChooseInput" value={this.props.valueDays} ></input>
               <button onClick={this.props.addDays}>+</button>
          </div>

           <div>
            <List renderHeader={() => 'Where would you like to exercise?'}>
              {exercisePlaceArray.map(i =>
                (
                  <RadioItem key={i.value}
                     checked={value === i.value}
                     onChange={() => this.onChange(i.value)}
                     onClick={()=>this.props.selectExercisePlace(i.value)}>
                     {i.label}
                  </RadioItem>
              ))}
            </List>
           </div>

           <div>
           {
             this.renderPage(this.props.exercisePlace)
           }

           </div>



       </div>
 );
 }
}



export default Step2
