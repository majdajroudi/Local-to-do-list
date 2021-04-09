import React,{useState, useRef, useEffect} from "react"
import SingleItemField from "../SingleItemField"
import {Modal, Button, Input} from "antd"

function EditCard(props) {
    const [editTitleValue, setEditTitleValue] = useState(props.card.title)
    const titleInputRef = useRef()
    
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

    const handleEnterClick = (e) => {
        if (e.key === "Enter") {
            handleOk(e)
        }
    }

    useEffect(() => {
        if (props.isModalVisible){
            titleInputRef.current.focus()
        }
    }, [props.isModalVisible])


    return(
        <Modal visible={props.isModalVisible} onOk={(e) => handleOk(e)} onCancel={(e) => handleCancel(e)}>
            <div onKeyDown={(e) => handleEnterClick(e)} className="modal-body">
                <div className="modal-body-top">
                    <Input 
                    placeholder="Edit Project's name"
                    value={editTitleValue}
                    onChange={(e) => setEditTitleValue(e.target.value)}
                    ref={titleInputRef}
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
            </div>
        </Modal>
    )
}

export default EditCard