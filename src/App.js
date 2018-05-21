import React from 'react';
import PropTypes from 'prop-types';

class App extends React.Component {
  
  render() {
    return (
      <div>
      <Title/>
     </div>
    )
  }
}

const Title = (props) => <h1> Title: {props.text} </h1>
Title.PropTypes = {
  text: PropTypes.string.isRequired
}



export default App;