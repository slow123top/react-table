import React, { Component, useState } from 'react';

class HyTableBody extends Component {

  constructor(props) {
    super(props);
    // this.setSelect = this.setSelect.bind(this);
    this.state = {
      selection: {},
      selectIndex: -1
    }
  }
  setSelect(i, data) {
    this.setState((preState, props) => {
      if (props.singleSelect) {
        if (preState.selectIndex === i) {
          return {
            selection: undefined,
            selectIndex: -1
          }
        }
        return {
          selection: data,
          selectIndex: i
        }
      } else {
        // 多选
        if (this.isSelect(i, data)) {
          delete preState.selection[i];

          return {
            selection: preState.selection
          }
        } else {
          const temp = {};
          temp[i] = data;
          return {
            selection: Object.assign({}, preState.selection, temp)
          }
        }

      }

    })
  }
  isSelect(index, data) {
    if (this.state.selection) {
      if (this.props.singleSelect) {
        return this.state.selection === data;
      } else {
        return this.state.selection[index] !== undefined;
      }
    }
    return false;
  }
  renderRows(props) {
    return props.data.map((ele, index) => {
      return (
        <tr className={(this.state.selectIndex === index && this.state.selection === ele) || this.state.selection[index] === ele ? 'tr-select' : ''}
          key={index} onClick={this.setSelect.bind(this, index, ele)}>
          {this.renderColumns(props, ele)}
        </tr>
      );
    })
  }
  renderColumns(props, row) {
    return props.columns.map(ele => {
      return (<td key={row[ele.field] + ele.field}>{row[ele.field]}</td>)
    });
  }
  render() {

    return (
      <tbody>
        {this.renderRows(this.props)}
      </tbody>
    );
  }
}

export default HyTableBody;
