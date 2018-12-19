import React, { Component } from 'react';
// import { HyTable } from './table';
class HyTableColumn extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <td>{this.props.dataItem[this.props.field]}</td>
    );
  }
}

export default HyTableColumn;
