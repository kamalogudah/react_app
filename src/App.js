import React from 'react';
import PropTypes from 'prop-types';

class App extends React.Component {
  render() {
        let txt = this.props.txt
        return <h1>{ txt} </h1>
              }
}
App.propTypes = {
  txt: PropTypes.string,
  cat: PropTypes.number.isRequired
}


export default App;