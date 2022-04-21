import React, { useState } from 'react';
import { DesktopOutlined, PieChartOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';

const { Sider } = Layout;

type TProps = {
  isMobile?: boolean;
};

const Sidebar = (props: TProps): JSX.Element => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Sider
      collapsible
      breakpoint={!props.isMobile ? 'md' : 'lg'}
      collapsedWidth={props.isMobile ? 0 : undefined}
      collapsed={collapsed}
      onCollapse={() => setCollapsed(!collapsed)}
      theme="light"
      className={`${props.isMobile ? ' lg:hidden fixed top-0 left-0 ' : 'hidden lg:block'}`}
    >
      <div className="logo" />
      <Menu theme="light" defaultSelectedKeys={['1']} mode="inline">
        <Menu.Item key="1" icon={<PieChartOutlined />}>
          <Link to="/"> Home </Link>
        </Menu.Item>

        <Menu.Item key="2" icon={<DesktopOutlined />}>
          <Link to="/users/"> Users </Link>
        </Menu.Item>

        {/* <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
          <Menu.Item key="6">Team 1</Menu.Item>
          <Menu.Item key="8">Team 2</Menu.Item>
        </SubMenu> */}
      </Menu>
    </Sider>
  );
};

export default Sidebar;
