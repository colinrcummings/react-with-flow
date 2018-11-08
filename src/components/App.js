// @flow
import * as React from 'react';
import { Container, Row, Col, ButtonGroup } from 'reactstrap';

import api from '../api';
import SelectionButton from './SelectionButton';
import SelectionItems from './SelectionItems';

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
    currentSelection: 'fruits'
  };

  componentDidMount() {
    this.handleCurrentSelection(this.state.currentSelection);
  }

  handleCurrentSelection = (currentSelection: string) => {
    if (!this.state[currentSelection]) {
      this.setState({ currentSelection }, () =>
        api.get(currentSelection).then(data => {
          this.setState({
            [currentSelection]: data
          });
        })
      );
    } else {
      this.setState({
        currentSelection
      });
    }
  };

  render() {
    const { currentSelection } = this.state;
    const selectionItems = this.state[currentSelection];

    return (
      <Container>
        <Row className="text-center">
          <Col sm="12">
            <h1>Food Groups</h1>
            <hr />
            <ButtonGroup style={{ marginBottom: 10 }}>
              {['fruits', 'vegitables', 'dairy'].map(selection => (
                <SelectionButton
                  disabled={!selectionItems}
                  key={selection}
                  selection={selection}
                  currentSelection={currentSelection}
                  handleClick={this.handleCurrentSelection}
                />
              ))}
            </ButtonGroup>
            {selectionItems ? (
              <SelectionItems items={selectionItems} />
            ) : (
              <p className="text-muted font-italic">
                Loading {currentSelection}...
              </p>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
