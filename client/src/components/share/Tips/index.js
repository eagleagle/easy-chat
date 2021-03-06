import React from 'react';
import { createPortal } from 'react-dom';

import './style.less';

export default class Tips extends React.Component {
    constructor() {
        super(...arguments);

        const doc = window.document;
        this.node = doc.createElement('div');
        doc.body.appendChild(this.node);
    }

    render() {
        return createPortal(
            <div class="tips">
                {this.props.children}
            </div>,
            this.node
        );
    }

    componentWillUnmount() {
        window.document.body.removeChild(this.node);
    }
}