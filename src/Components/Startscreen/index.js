import React,{ Component} from 'react'
import{Link} from 'react-router-dom'
import Logo from'../../image/123.jpg'
import'./Startscreen.css'
import Login from '../login/'


class StartScreen extends Component{
  render(){
    return <div className="start-screen" >
                      <img  className="logo" src={Logo} alt="Logo"/>
                      <div className="start-button">
                      <Link  to="/Register">
                             <button className="hv">Register</button>
                      </Link>

                      <Link  to="/Login">
                             <button className="hv">Login</button>
                      </Link>
                       <p className="copy-right"> CopyRight  @ 2018 Nepal</p>
                      </div>

           </div>
  }
}
 export default StartScreen
