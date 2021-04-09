import React from "react"
import {Layout, Menu, Avatar} from "antd"
import { UserOutlined } from '@ant-design/icons';
import "./index.css"

function Sidebar(props)  {
  const {Sider} = Layout;
  const {SubMenu} = Menu;

  // const handleFileSelect = (e) => {
  //   const reader = new FileReader()
  //   console.log(e.target.files[0])
  //   reader.readAsDataURL(e.target.files[0])
  //   reader.onload = function(e) {
  //     setImageSrc(e.target.result)
  //     console.log(e.target.result)
  //   }
  // }

  return(
      <Sider style={{height: "100%", overflow: "auto"}} className="sidebar__bar">
        <div className="sidebar__bar__user">
          <Avatar className="sidebar__bar__user__avatar" size={64} icon ={<UserOutlined />} alt="user-avatar" />
          <span className="sidebar__bar__user__name">{props.userName}</span>
        </div>
        <div className="siderbar__bar__menu">
        </div>
      </Sider>
  )
}

export default Sidebar