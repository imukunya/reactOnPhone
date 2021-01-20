
import React from "react";
import { hot } from 'react-hot-loader/root';
import Navbar from "Navbar";

class App extends React.Component {
  render() {
    const { name } = this.props;
    return (
      <div class="container">
      <Navbar></Navbar>
        <h1>
          Hello {name}
        </h1>
      </div>
    );
  }
}

export default hot(App);
