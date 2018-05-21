import React from 'react';
import PropTypes from 'prop-types';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      text: 'this is the state txt'
    }
  }
  update(e){
    this.setState({text: e.target.value})
  }

  render() {
    return (
      <div>
        <h1> {this.state.text} </h1>
       <Widget update={this.update.bind(this)} />
      </div>
    )
  }
}

const Widget = (props) =>
<input type="text" onChange={props.update} />



export default App;