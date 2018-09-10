import Footer from'../../../Components/workout/footer/'
import React, {Component} from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from'./action'

class Footercontainer extends Component{

  render(){


    return(
      <div>

      <Footer/>



      </div>
    )
  }
}

function mapStateToProps(state){
  return {

  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(actions, dispatch);
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Footercontainer);
