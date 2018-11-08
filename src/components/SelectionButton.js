// @flow
import * as React from 'react';
import { Button } from 'reactstrap';

type Props = {
  disabled: boolean,
  selection: string,
  currentSelection: string,
  handleClick: Function
};

const SelectionButton = ({
  disabled,
  selection,
  currentSelection,
  handleClick
}: Props) => (
  <Button
    disabled={disabled}
    active={selection === currentSelection}
    onClick={() => handleClick(selection)}
  >
    {selection}
  </Button>
);

export default SelectionButton;
