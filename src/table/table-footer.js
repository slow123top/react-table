import React, { Component } from 'react';
import PropTypes from 'prop-types';
class HyTableFooter extends Component {
    static propTypes = {
        children: PropTypes.element.isRequired
    }
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <tfoot>
                {this.props.children}
            </tfoot>
        );
    }

}

export default HyTableFooter;