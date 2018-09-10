import React,{ Component} from 'react'
import { Picker,List,InputItem } from 'antd-mobile';
import './step1.css';





class Step1 extends Component{

  render(){
    const gender=[
      {
        value:'Female',
        label:'Female'
      },
      {
        value:'Male',
        label:'Male'
      }
    ]

    const ageArray = ArrtoObj(12, 75, false);
    const weightArray = ArrtoObj(20, 300, true);

    return (
      <div>


      <div className="step1">
           <div className="your-detail">
           <p>Your Details</p>
           </div>

           <div>
              <List className="detail-information">
              <InputItem type="text"

               placeholder="Please enter your name"
               value={this.props.name}
               onChange={(v)=>this.props.addName(v)}


               >Name
              </InputItem>

             <Picker
             data={gender}
             cols={1}
             className="forss"
             title="Gender"
             extra=" select "
             value={this.props.gender_}
             onOk={(v)=>this.props.selectGender(v)}
             >
             <List.Item arrow="horizontal">Gender</List.Item>
             </Picker>

             <Picker
              data={ageArray}
              cols={1}
              className="forss"
              title="Age"
              extra="select"
              value={this.props.age_}
              onOk={(v)=> this.props.selectAge(v)}
              >
             <List.Item arrow="horizontal">Age</List.Item>
             </Picker>

             <Picker
             data={weightArray}
             cols={1}
             className="forss"
             title="Weight"
             value={this.props.weight_}
             onOk={(v)=> this.props.selectWeight(v)}
             >
             <List.Item arrow="horizontal">Current Body Weight</List.Item>

             </Picker>
            </List>
            </div>
           </div>

           </div>
    )}

}
function ArrtoObj(RangeFrom: int, RangeTo: int, unit: boolean) {
  var returnArray = [];
  if (unit) {
    for (let i = RangeFrom; i <= RangeTo; i++) {
      returnArray.push({value: i, label: i + " kg"})
    };
  } else {
    for (let i = RangeFrom; i <= RangeTo; i++) {
      returnArray.push({value: i, label: i})
    };
  }
  return returnArray;
}
 export default Step1
