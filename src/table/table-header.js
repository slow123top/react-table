import React, { Component } from 'react';

class HyTableHeader extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <thead>
        <tr>
          {this.props.columns.map(ele => {
            return (<th key={ele.field.toString()}>{ele.field}</th>)
          })}
        </tr>
      </thead>
    );
  }
}

export default HyTableHeader;
