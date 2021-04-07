import React from "react"
import {Modal, Button} from "antd"

function EditCard(props) {
    
    const handleOk = (e) => {
        e.preventDefault()
        props.setIsModalVisible(false)
    }

    const handleCancel= (e) => {
        e.preventDefault()
        props.setIsModalVisible(false)
    }


    return(
        <Modal visible={props.isModalVisible} onOk={(e) => handleOk(e)} onCancel={(e) => handleCancel(e)}>
        </Modal>
    )
}

export default EditCard