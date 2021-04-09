import React from "react"
import {Layout, Avatar, Button} from "antd"
import { UserOutlined } from '@ant-design/icons';
import "./index.css"

function Sidebar(props)  {
  const {Sider} = Layout;

  const handleEditName = (e) => {
    e.preventDefault()
    props.setUserName("")
  }

  return(
      <Sider style={{height: "100%", overflow: "auto"}} className="sidebar__bar">
        <div className="sidebar__bar__user">
          <Avatar className="sidebar__bar__user__avatar" size={64} icon ={<UserOutlined />} alt="user-avatar" />
          <span className="sidebar__bar__user__name">{props.userName}</span>
        </div>
        <div className="siderbar__bar__menu">
          <Button className="siderbar__bar__menu--editName" onClick={(e) => handleEditName(e)}>
            Edit name
          </Button>
        </div>
      </Sider>
  )
}

export default Sidebar