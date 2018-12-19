import React, { Component } from 'react';
import HyTableHeader from './table-header';
import HyTableBody from './table-body';
import HyTableFooter from './table-footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './hy-table.css';
import PropTypes from 'prop-types';
class HyTable extends Component {
    // 设置默认值  因为进行了静态类型检查
    static defaultProps = {
        footer: <tr><td>默认结尾</td></tr>,
        singleSelect: false
    }
    constructor(props) {
        super(props);
        this.state = {
            selectIndex: -1,
            selection: undefined
        }
    }
    data(props) {
        return props.data;
    }
    columns(props) {
        return props.columns;
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
            }
        })
    }
    render() {
        const COLUMNS = this.props.columns;
        const DATA = this.props.data;
        const STYLE = {
            width: this.props.width + 'px',
            height: this.props.height + 'px'
        };
        if (COLUMNS) {
            return (<table className={`table ${this.props.addedClass} ${this.props.hasOwnProperty('bordered') ? 'table-bordered' : ''}`}
                style={STYLE}>
                <HyTableHeader columns={COLUMNS} />
                <HyTableBody singleSelect={this.props.singleSelect} columns={COLUMNS} data={DATA} />
                <HyTableFooter children={
                    this.props.footer
                }></HyTableFooter>
            </table>);
        }
        const HEADER = React.Children.map(this.props.children, child => {
            return React.cloneElement(<th>{child.props.title}</th>)
        });
        return <table className={`table ${this.props.addedClass} ${this.props.hasOwnProperty('bordered') ? 'table-bordered' : ''}`}
            style={STYLE}>
            <thead>
                <tr>
                    {HEADER}
                </tr>
            </thead>
            <tbody>
                {DATA.map((dataItem, index) => {
                    return (<tr key={index.toString()} className={this.state.selectIndex === index ? 'tr-select' : ''} 
                    onClick={this.setSelect.bind(this, index, dataItem)}>{
                        React.Children.map(this.props.children, child => {
                            return React.cloneElement(child, {
                                //把父组件的props.name赋值给每个子组件（父组件传值给子组件）
                                dataItem: dataItem,
                            })
                        })}
                    </tr>)
                })}
            </tbody>
            <HyTableFooter children={
                this.props.footer
            }></HyTableFooter>
        </table>

    }
}

export default HyTable;
