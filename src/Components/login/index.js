import React,{ Component} from 'react'
import axios from 'axios'
import Email from'react-icons/lib/md/email';
import Lock from 'react-icons/lib/md/lock';
import{Link} from 'react-router-dom'
import logo from'../../image/123.jpg'
import { List, InputItem,} from 'antd-mobile';
import './login.css'



class Login extends Component{

  // onClickButton=()=>{
  //   const data={
  //     email: this.props.email,
  //     password: this.props.password
  //   };
  //   axios.get("https://jsonplaceholder.typicode.com/posts",data)
  //   .then(response=>{
  //     console.log(response);
  //   })
  // }

  render(){
    return (
      <div className="login">

          <img src={logo} className="logo" alt="logo"/>
          <div className="login-detail">
            <List>
               <InputItem type="text"
               placeholder="E-mail"
               onChange={(a)=>{this.props.onAddEmail(a)
               console.log(this.props.email)}}
               value={this.props.email}>
               <Email className="icons"/>
               </InputItem>

               <InputItem type="password"
               placeholder="Password"
               onChange={(e)=>{this.props.onAddPassword(e)
               console.log(this.props.password)}}
               value={this.props.password}>
               <Lock className="icons"/>
               </InputItem>
              </List>
            </div>

          <button className="hv" >Log in</button>

            <div className="forgot-password">
                <Link className="" to="/ResetPassword">
                <p> Forgot Password?</p></Link>
            </div>


            <div className="qwe">
                <p >Do not have an account ?</p>
                <Link to="Register"><button className="hv">Register</button></Link>
            </div>

           </div>
    )}
    /*setUserInfo(event, key){
     let obj = {};
     obj[key] = event.target.value;
     this.setState(obj);
   }*/

}
 export default Login
