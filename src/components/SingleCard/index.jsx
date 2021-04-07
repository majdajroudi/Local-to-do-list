import React,{useState} from "react"
import {Card, Checkbox,Button} from "antd"
import EditCard from "../EditCard"
import "./index.css"

function SingleCard(props) {
    const [isModalVisible, setIsModalVisible] = useState(false)

    const handleEditClick = (e) => {
        e.preventDefault()
        setIsModalVisible(true)
    }

    return(
        <Card className="content__card" title={props.card.title}>
            <div>
                <Button onClick={(e) => handleEditClick(e)}>Edit</Button>
            </div>
            <ul className="itemList">
                {props.card.items.map((currentItem, itemIndex) => {
                    return(
                        <li key={`item-${itemIndex}`} className="itemList__singleItem">
                            <Checkbox/>
                            <span>{currentItem}</span>
                        </li>
                    )
                })}
            </ul>
            <EditCard isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible} card={props.card} />
        </Card>
    )
}

export default SingleCard