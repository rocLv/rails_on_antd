import React, { PropTypes } from 'react';

export default class Header extends React.Component {
  render () {
    return (
      <div>
        <h1>B2B管理后台</h1>
        <ul>
          <li>管理员</li>
          <li>退出登录</li>
        </ul>
      </div>
    )
  }
}
