import React from "react"
import {Checkbox} from "antd"
import {DeleteOutlined} from "@ant-design/icons"
import "./index.css"

function SingleItemField(props) {

    return(
        <li className="singleItem">
            <Checkbox className="singleItem__item">
                <span>{props.itemName}</span>
            </Checkbox>
            <DeleteOutlined className="singleItem__delete" />
        </li>
    )
}

export default SingleItemField