import React, {Component} from 'react';
import Login from'../../Components/login/'
import {addUsername,addEmail,addPassword} from'./action'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actions from'./action'


class LoginContainer extends Component{

  render(){
    console.log("This is the login!")
    return(
      <div>
        <Login
            email={this.props.email}
            password={this.props.password}
            onAddEmail={this.props.addEmail}
            onAddPassword={this.props.addPassword}
            />
      </div>
    )
  }
}

function mapStateToProps(state){
   return {
    email:state.LoginReducer.email,
    password:state.LoginReducer.password,
   }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(actions, dispatch)

}


export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
