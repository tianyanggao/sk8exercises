import React, {Component} from 'react';
import Register from'../../Components/register/'
import {addUsername,addEmail,addPassword} from'./action'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actions from'./action'

class RegisterContainer extends Component{


  constructor(props){
    super(props);
  }


  render(){
    console.log("This is the Register container!")
    return(
      <div>
        <Register
            fullname={this.props.fullName}
            email={this.props.email}
            password={this.props.password}
            onAddUsername={this.props.addUsername}
            onAddEmail={this.props.addEmail}
            onAddPassword={this.props.addPassword}
            onClickButton={this.props.SignUpActions}
            />
      </div>
    )
  }
}

function mapStateToProps(state){
   return {
    fullName: state.RegisterContainer.fullname,
    email:state.RegisterContainer.email,
    password:state.RegisterContainer.password,
   }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(actions, dispatch)

}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterContainer);
