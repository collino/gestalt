// @flow
import * as React from 'react';
import PropTable from './components/PropTable.js';
import Example from './components/Example.js';
import PageHeader from './components/PageHeader.js';

const cards = [];
const card = c => cards.push(c);

card(
  <PageHeader
    name="SegmentedControl"
    description="
Segmented Controls may be used to group between multiple selections.
The controls display the current state and related state.

Create layout to convey clear sense of information hierarchy.
When control is engaged, information below the control should get updated.
"
  />
);

card(
  <PropTable
    props={[
      {
        name: 'items',
        type: 'Array<React.Node>',
        required: true,
      },
      {
        name: 'onChange',
        type: '({ event: SyntheticMouseEvent<>, activeIndex: number }) => void',
        required: true,
      },
      {
        name: 'selectedItemIndex',
        type: 'number',
        required: true,
        description: 'Index of element in `items` that is selected.',
      },
      {
        name: 'size',
        type: '"md" | "lg"',
        required: false,
        description: 'md: 40px, lg: 48px',
        defaultValue: 'md',
      },
    ]}
  />
);

card(
  <Example
    description="Segmented Controls are naive components, meaning you need to write up the behavior when you click on an item.

    If you'd like the tabs to control hiding or showing content that state should
    live in a parent component.
    "
    name="Example"
    defaultCode={`
class ToastExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemIndex: 0,
    };
    this.handleItemChange = this.handleItemChange.bind(this);
  }

  handleItemChange({ activeIndex }) {
    this.setState(prevState => ({ itemIndex: activeIndex }));
  };

  render() {
    const items = [
      'News',
      'You',
      'Messages',
      <Icon
        icon="pin"
        accessibilityLabel="Pin"
        color={this.state.itemIndex === 3 ? 'darkGray' : 'gray'}
      />,
    ];

    return (
      <SegmentedControl
        items={items}
        selectedItemIndex={this.state.itemIndex}
        onChange={this.handleItemChange}
      />
    );
  }
}
    `}
  />
);

export default cards;
