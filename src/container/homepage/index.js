import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actions from'./action'
import Footer from '../workout/footercontainer/'



class HomePageContainer extends Component{

  state = {
      data: ['1', '2', '3'],
      imgHeight: 176,
    }

  render(){
    console.log("This is the HomePage!")
    return(
      <div>
        <div>
        <p>Nepal</p>
        <p>HEALTH COACH</p>
        </div>

        <div className="square-button-flex-container">
        <div >
        <button onClick={()=>alert("not available yet!")}>
        <p>Workout</p>
        </button>
        </div>

        <div>
        <button  onClick={()=>alert("not available yet!")}>
        <p> Rehab and Posture</p>
        </button>
        </div>
        </div>

        <div className="square-button-flex-container">
        <div>
        <button  onClick={()=>alert("not available yet!")}>
        <p>Profile</p>
        </button>
        </div>

        <div>
        <button  onClick={()=>alert("not available yet!")}>
        <p>Content</p>
        </button>
        </div>
        </div>

        <div className="square-button-flex-container">
        <div>
        <button  onClick={()=>alert("not available yet!")}>
        <p>Ask a Question</p>
        </button>
        </div>

        <div>
        <button  onClick={()=>alert("not available yet!")}>
        <p>FAQ</p>
        </button>
        </div>
        </div>

        <Footer/>



      </div>
    )
  }
}




export default HomePageContainer
