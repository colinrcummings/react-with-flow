// @flow
import * as React from "react";

import api from "../api";

type Props = {};

type State = {
  fruits: ?Array<string>,
  vegitables: ?Array<string>,
  dairy: ?Array<string>,
  currentSelection: string
};

class App extends React.Component<Props, State> {
  state = {
    fruits: null,
    vegitables: null,
    dairy: null,
    currentSelection: "fruits"
  };

  componentDidMount() {
    this.handleCurrentSelection(this.state.currentSelection);
  }

  handleCurrentSelection = (currentSelection: string) => {
    if (!this.state[currentSelection]) {
      api.get(currentSelection).then(data => {
        this.setState({
          [currentSelection]: data,
          currentSelection
        });
      });
    } else {
      this.setState({
        currentSelection
      });
    }
  };

  render() {
    const { currentSelection } = this.state;

    if (this.state[currentSelection]) {
      return this.state[currentSelection].map<React.Node>(d => (
        <h2 key={d}>{d}</h2>
      ));
    }

    return <h1>Loading {currentSelection}...</h1>;
  }
}

export default App;
