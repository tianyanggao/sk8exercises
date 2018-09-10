import React,{ Component} from 'react'
import{Link} from 'react-router-dom'
import Locks from 'react-icons/lib/md/lock';
import Email from'react-icons/lib/md/email';




class ResetPassword extends Component{
  setUserInfo(event){
    this.setState({
      user_email:event.target.value,
    })
  }

changecolor(e,r){
  e.style.Color=r;
}


  constructor(props){
    super(props);
    this.state={
      user_email:"",
    };
  }


  render(){
    return (

             <div className="resetP">
                 <Locks className="resetlogo"/>


             <p className="Reset1">Forgot Password?</p>



             <div className="NoWorries">
             <p className="Reset3">Do not worry.</p>
             <p className="Reset2">We just need your registered email</p>
             <p className="Reset2">address to send you password reset</p>
             </div>

            <div className="resetemail">
             <div className="detailinfor">
             <Email className="icons"/>
             <input className="Reset5" type="text"  onChange={(e)=>{this.setUserInfo(e)
             console.log(this.state.user_email)}} placeholder="E-mail"/>
             </div>
             </div>

             <button className="hv">Reset Password</button>


             <div className="qwe">
             <p>Do not have account?</p>
             </div>


             <Link  to="/Register">
             <button  className="hv" onclick={(e,red)=>{this.changecolor(e,'red')}}>Register</button></Link>

          </div>


  );}}

 export default ResetPassword
