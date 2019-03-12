import React, { Component } from 'react';
//import CardList from "./CardList";

class App extends Component {
  render() {
    return (
      <div className=" tc bg-light-green dib ma3 pa3 br3 grow bw2 shadow-5">
        <img
          src={`https://robohash.org/${this.props.id}?200x200`}
          alt="robots"
        />
        <div>
          <h2>{this.props.name}</h2>
          <p>{this.props.place}</p>
          <p>{this.props.bn}</p>
          <p>{this.props.email}</p>
          <p>{this.props.phone}</p>
        </div>
      </div>
    );
  }
}

export default App;
