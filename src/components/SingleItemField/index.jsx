import React,{useState} from "react"
import {Checkbox} from "antd"
import {DeleteOutlined} from "@ant-design/icons"
import "./index.css"

function SingleItemField(props) {
    const indexOfCard = props.cards.indexOf(props.currentCard)
    const cardsCopy = [...props.cards]


    const handleDeleteItem = (e) => {
        e.preventDefault()
        cardsCopy[indexOfCard].items.splice(props.itemIndex, 1)
        props.cardsFunction(cardsCopy)
    }

    const handleItemCheck = (e) => {
        cardsCopy[indexOfCard].items[props.itemIndex].checked = e.target.checked;
        props.cardsFunction(cardsCopy)
    }

    return(
        <li className="singleItem">
            <Checkbox className="singleItem__item" checked={props.currentItem.checked} onChange={(e) => handleItemCheck(e)}>
                <span>{props.currentItem.title}</span>
            </Checkbox>
            <DeleteOutlined className="singleItem__delete" onClick={(e) => handleDeleteItem(e)}/>
        </li>
    )
}

export default SingleItemField