import React,{ Component} from 'react';
import { Progress} from 'antd-mobile';


class Progressicon extends Component {
    //
    // state = {
    //   percent: this.props.steps,
    // };

    progressState=(p)=>
    {
      let percent= p/7*100;
      return(Math.round(percent))
    }

    render() {

      return (
        <div className="progress-container">
        <div className="show-info">
          <div className="progress">
          <Progress percent={this.progressState(this.props.steps)} position="normal" /></div>
          <div aria-hidden="true">{this.progressState(this.props.steps)}%</div>
        </div>
      </div>
      );
    }
  }


export default Progressicon
