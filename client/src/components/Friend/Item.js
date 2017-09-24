//用户卡片
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import pathConfigs from '../../routes/path';
import Card from '../share/Card/';

export default class FriendItem extends PureComponent {
    
    static propTypes = {
        avatarUrl: PropTypes.string,
        nickname: PropTypes.string.isRequired,
        friendId: PropTypes.string.isRequired,
        remark: PropTypes.string
    }

    render() {
        const { friendId, avatarUrl, nickname, remark } = this.props;

        return (
            <Card
                to={`${pathConfigs.friends}/${friendId}`}
                classPrefix="friend-card"
                userInfo={{ avatarUrl, nickname, remark }}
            />
        );
    }

} 