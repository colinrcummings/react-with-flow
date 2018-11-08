// @flow
import * as React from 'react';

const SelectionItems = ({ items }: { items: Array<string> }) => (
  <React.Fragment>
    {items.map(d => (
      <p key={d}>{d}</p>
    ))}
  </React.Fragment>
);

export default SelectionItems;
