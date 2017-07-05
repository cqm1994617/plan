import React from 'react';
import { observer } from 'mobx-react';

import Item from './Item';

@observer
export default class Main extends React.Component {

  static propTypes = {
    store: React.store.object,
  };

  render() {
    return (
      <div className="main">
        {this.props.store.todos.map((z, i) => <Item text={z} id={i} />)}
      </div>
    );
  }
}
