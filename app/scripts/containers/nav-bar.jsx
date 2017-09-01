import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { shouldUpdate } from 'should-update';
import {
  Icon,
  Menu,
} from 'antd';

const MenuItemGroup = Menu.ItemGroup;
const MenuItem = Menu.Item;

@connect(state => ({ router: state.router }))
class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pathnames: [props.router.location.pathname],
    };
  }

  componentWillReceiveProps(nextState) {
    if (shouldUpdate(['pathname'], this.props.router.location, nextState.router.location)) {
      this.setState({ pathnames: [nextState.router.location.pathname] });
    }
  }

  render() {
    const { pathnames } = this.state;
    return (
      <Menu
        mode="inline"
        selectedKeys={pathnames}
      >
        <MenuItemGroup title="下拉多选框">
          <MenuItem key="/form-update-page">
            <Link to="/form-update-page">
              <Icon type="mail" /> 表单更新
            </Link>
          </MenuItem>
          <MenuItem key="/form-update-optimized-page">
            <Link to="/form-update-optimized-page">
              <Icon type="mail" /> 表单更新（debounce）
            </Link>
          </MenuItem>
        </MenuItemGroup>
      </Menu>
    );
  }
}

NavBar.defaultProps = {
  router: {
    location: {
      pathname: '',
    },
  },
};

NavBar.propTypes = {
  router: PropTypes.shape({
    location: PropTypes.objectOf(PropTypes.any),
  }),
};

export default NavBar;
