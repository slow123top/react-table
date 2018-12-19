import React, { Component } from 'react';

class Button extends Component {
    constructor(props) {
        super(props);
        // 绑定事件
        this.getExport = this.getExport.bind(this);
    }
    getButtonClass() {
        console.log(this.props.className);
        return this.props.className;
    }
    getExport() {
        this.props.clickEvent('sasa');
        console.log('aa');
    }
    render() {
        return (
            <button className={this.getButtonClass()} onClick={this.getExport}>按钮</button>
        )
    }
}
export default Button;