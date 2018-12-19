import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Button from './button';
import { HyTable, HyTableColumn } from './table';
class App extends Component {
  constructor(props) {
    super(props);
    this.getExport = this.getExport.bind(this);
  }
  getExport(x) {
    console.log(x);
  }
  render() {
    const COLUMNS = [
      { field: 'name' },
      { field: 'age' },
    ];
    const DATA = [
      { name: 'hyy', age: 20 },
      { name: 'hyy1', age: 23 },
      { name: 'hyy2', age: 27 },
      { name: 'hyy3', age: 27 },
    ];
    const DATA1 = [
      { name: 'hyy4', age: 27 },
      { name: 'hyy5', age: 27 },
      { name: 'hyy6', age: 27 },
      { name: 'hyy7', age: 27 },
      { name: 'hyy', age: 27 },
    ]
    // 表格JSX 边框 添加自定义类名 设置宽高
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <HyTable singleSelect={true} data={DATA} bordered width={400}>
            <HyTableColumn field={'name'} title={'姓名'}></HyTableColumn>
            <HyTableColumn field={'age'} title={'年龄'}></HyTableColumn>
          </HyTable>
          <HyTable singleSelect={false} data={DATA1} columns={COLUMNS} bordered width={500} footer={<tr><td colSpan="2">表格末尾</td></tr>}>
          </HyTable>
        </header>
      </div>
    );
  }
}

export default App;
