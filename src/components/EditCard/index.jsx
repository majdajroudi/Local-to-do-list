import React,{useState} from "react"
import SingleItemField from "../SingleItemField"
import {Modal, Button, Input} from "antd"

function EditCard(props) {
    const [editTitleValue, setEditTitleValue] = useState(props.card.title)
    
    const handleOk = (e) => {
        e.preventDefault()
        const cardsCopy = [...props.cards];
        const currCardCopy = {...props.card};
        const cardIndex= props.cards.indexOf(props.card);
        currCardCopy.title = editTitleValue;
        cardsCopy[cardIndex] = currCardCopy;
        props.cardsFunction(cardsCopy)
        props.setIsModalVisible(false)
    }

    const handleCancel= (e) => {
        e.preventDefault()
        props.setIsModalVisible(false)
    }


    return(
        <Modal visible={props.isModalVisible} onOk={(e) => handleOk(e)} onCancel={(e) => handleCancel(e)}>
            <div className="modal-body-top">
                <Input 
                  placeholder="Edit Project's name"
                  value={editTitleValue}
                  onChange={(e) => setEditTitleValue(e.target.value)}
                  />
            </div>
            <div className="modal-body-bottom">
                <ul className="itemList">
                    {props.card.items.map((currentItem, itemIndex) => {
                        return(
                            <SingleItemField 
                            key={`item-${itemIndex}`} 
                            itemName={currentItem}
                            itemIndex={itemIndex} 
                            cards={props.cards}
                            currentCard={props.card}
                            cardsFunction={props.cardsFunction}
                            className="itemList__singleItem" />
                        )
                    })}
                </ul>
            </div>
        </Modal>
    )
}

export default EditCard