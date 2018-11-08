// @flow
import * as React from "react";

import api from "../api";

type Props = {};

type State = {
  data: ?Array<number>
};

class App extends React.Component<Props, State> {
  state = {
    data: null
  };

  componentDidMount() {
    api.get.then(data => this.setState({ data }));
  }

  render() {
    const { data } = this.state;

    if (data) {
      return data.map<React.Node>(d => <h2 key={d}>{d}</h2>);
    }

    return <h1>Loading...</h1>;
  }
}

export default App;
