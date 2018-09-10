import React,{ Component} from 'react'
import{Link} from 'react-router-dom'
import Logo from'../../image/123.jpg'
import './launch.css'
// import mainLogo from '.../image/123.jpg'
// import homebackground from '../background.png'

// const backg={
//     background:"#2F354D",
//     height:"100vh",
//
// }

class SplashScreen extends Component{
  render(){
    return <div className="splashScreen" >
                   <img src={Logo} className="logo" alt="logo"/>
                   <Link to="/StartScreen">
                   <button className= "getStarted" >Get Started</button></Link>
                   <p className="copy-right"> CopyRight  @ 2018 Nepal</p>

           </div>
  }
}
 export default SplashScreen
