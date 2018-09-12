import React,{ Component} from 'react';
import Logo from'../../image/123.jpg'
import Account from 'react-icons/lib/md/account-circle';
import Email from'react-icons/lib/md/email';
import Lock from 'react-icons/lib/md/lock';
import{Link} from 'react-router-dom'
import'./register.css'
import { List, InputItem, WingBlank, Button,} from 'antd-mobile';
import { createForm } from 'rc-form';
import axios from'axios'
import YouTube from 'react-youtube';



class Register extends Component{
  constructor(props){
      super(props)
      this.state={
        able: false,
      }
    }

  // postDataHandler=()=>{
  //   const data={
  //     fullname: this.props.fullname,
  //     email: this.props.email,
  //     password: this.props.password
  //   };
  //   axios.post('https://jsonplaceholder.typicode.com/posts',data)
  //   .then(response =>{
  //     console.log('register successfully!')
  //     console.log(response.data);
  //
  //   })
  //   .catch(error=>{
  //     console.log(error);
  //   })
  //  }
  onAbleChange(){
      const fullname = this.props.fullname;
      const email = this.props.email;
      const password = this.props.password;
      this.props.onClickButton(fullname, email, password)
    }

  render(){
    const opts = {
      height: '390',
      width: '640',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    };
    return (
      <div className="register">
           <img  className="logo" src={Logo} alt="logo"/>

            <div className="register-detail">
              <List>
              <InputItem type="text"
              placeholder="Full Name"
              value={this.props.fullname}
              onChange={(e)=>{this.props.onAddUsername(e)
              console.log(this.props.fullname)}}
              >
              <Account className="icons"/>
              </InputItem>

              <InputItem type="text"
              placeholder="E-mail"
              onChange={(a)=>{this.props.onAddEmail(a)
              console.log(this.props.email)}}
              >
              <Email className="icons"/>
              </InputItem>

              <InputItem type="password"
              placeholder="Password"
              onChange={(a)=>{this.props.onAddPassword(a)
              console.log(this.props.password)}}
              >
              <Lock className="icons"/>
              </InputItem>
              </List>
              </div>

              <div className="create-button">

                <button className="hv"
                onClick={()=> this.onAbleChange()}>Create Account</button>

                <p> By resigtering, you agree to our terms and conditions</p>
              </div>
              <div>
              <YouTube
       videoId="DoSbvTq-ZjU"
       opts={opts}
       onReady={this._onReady}
     />
              </div>

           </div>

         )}

         _onReady(event) {
   // access to player in all event handlers via event.target
   event.target.pauseVideo();
 }

}

 export default Register
