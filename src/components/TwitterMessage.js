import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();
    this.state = {
      message: ""
    }
  }

  handleMessage=(event)=>{
    //debugger
    this.setState({
      message: event.target.value
    })
     
  }

charCounterLeft = ()=>{
  return this.props.maxChars - this.state.message.length
}

render() {
  
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" onChange={this.handleMessage} id="message" value={this.state.message}/>
          {this.charCounterLeft()}
      </div>
    );
  }
}

export default TwitterMessage;
