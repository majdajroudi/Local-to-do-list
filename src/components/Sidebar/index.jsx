import React from "react"
import {Layout, Menu, Avatar} from "antd"
import { UserOutlined } from '@ant-design/icons';
import "./index.css"

function Sidebar()  {
  const {Sider} = Layout;
  const {SubMenu} = Menu;

  return(
      <Sider className="sidebar__bar">
        <div className="sidebar__bar__user">
          <Avatar className="sidebar__bar__user__avatar" size={64} icon ={<UserOutlined />} />
          <span className="sidebar__bar__user__name">User's Name</span>
        </div>
        <Menu>
          
        </Menu>
      </Sider>
  )
}

export default Sidebar