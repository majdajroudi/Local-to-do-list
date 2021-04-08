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
            <ul className="itemList">
                {props.card.items.map((currentItem, itemIndex) => {
                    return(
                        <li key={`item-${itemIndex}`} className="itemList__singleItem">
                            <Checkbox>
                                <span>{currentItem}</span>
                            <Checkbox />
                        </li>
                    )
                })}
            </ul>
            <div className="addItem">
                <Button className="addItemBtn">
                    +
                </Button>
            </div>
            <div>
                <Button onClick={(e) => handleEditClick(e)}>Edit</Button>
            </div>
            <EditCard isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible} card={props.card} />
        </Card>
    )
}

export default SingleCard