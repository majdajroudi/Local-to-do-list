import React from "react"
import {Checkbox} from "antd"
import {DeleteOutlined} from "@ant-design/icons"
import "./index.css"

function SingleItemField(props) {

    const handleDeleteItem = (e) => {
        e.preventDefault()
        const indexOfCard = props.cards.indexOf(props.currentCard)
        const cardsCopy = [...props.cards]
        cardsCopy[indexOfCard].items.splice(props.itemIndex, 1)
        props.cardsFunction(cardsCopy)
    }

    return(
        <li className="singleItem" style={{marginTop: props.itemIndex === 1 && "5%"}}>
            <Checkbox className="singleItem__item">
                <span>{props.itemName}</span>
            </Checkbox>
            <DeleteOutlined className="singleItem__delete" onClick={(e) => handleDeleteItem(e)}/>
        </li>
    )
}

export default SingleItemField