import { Dropdown, Menu, Layout } from 'antd';
import { useHistory } from 'react-router-dom';
import { useAppDispatch } from '../../app/hooks';
import { logout } from '../../app/slices/Auth';
import { getUser } from '../../utils/localStorage';
import Sidebar from './Sidebar';
const { Header } = Layout;

const User = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const history = useHistory();
  const user = getUser();

  const handleLogOut = () => {
    dispatch(logout(0));
    history.push('/login');
  };
  const menu = (
    <Menu theme="light">
      <Menu.Item>{user}</Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
          2nd menu item
        </a>
      </Menu.Item>
      <Menu.Item onClick={handleLogOut}>Logout</Menu.Item>
    </Menu>
  );

  return (
    <Header className="user_header" style={{ height: '100%' }}>
      <Sidebar isMobile={true} />

      <span style={{ color: 'black', marginRight: '1rem' }}>Welcome, {user} !</span>
      <Dropdown trigger={['click']} overlay={menu} placement="bottomLeft">
        <span className="avatar_parent">
          <img className="user-img" src={'https://picsum.photos/id/237/200/300'} style={{ cursor: 'pointer' }} />
        </span>
      </Dropdown>
    </Header>
  );
};

export default User;
