import React,{useState, useRef, useEffect, createRef} from "react"
import {Card, Button, Modal, Input, message} from "antd"
import EditCard from "../EditCard"
import SingleItemField from "../SingleItemField"
import "./index.css"

function SingleCard(props) {
    const [isModalVisible, setIsModalVisible] = useState(false)
    const [isItemModalVisible, setIsItemModalVisible] = useState(false)
    const [itemInputValue, setItemInputValue] = useState("")
    let addItemFieldRef = useRef([])

    const handleEditClick = (e) => {
        e.preventDefault()
        setIsModalVisible(true)
    }

    const handleAddItem = (e) => {
        e.preventDefault()
        if (itemInputValue !== "") {
            const cardsCopy = [...props.cards]
            cardsCopy[props.cardIndex].items.push(itemInputValue)
            props.cardsFunction(cardsCopy)
            setIsItemModalVisible(false)
            setItemInputValue("")
            message.success("Item successfully added")
        } else {
            message.error("Item cannot be empty")
        }
    }

    const handleAddClick = (e) => {
        e.preventDefault()
        setIsItemModalVisible(true)
    }

    useEffect(() => {
        console.log(addItemFieldRef)
        if(isItemModalVisible === true) {
            console.log(isItemModalVisible)
            addItemFieldRef.current.focus()
        }
    },[isItemModalVisible])

    const handleEnterClick = (e) => {
        if (e.key === "Enter") {
            handleAddItem(e)
        }
    }

    const handleDeleteCardClick = (e) => {
        e.preventDefault()
        const cardsCopy = [...props.cards]
        cardsCopy.splice(props.cardIndex, 1)
        props.cardsFunction(cardsCopy)
    }

    return(
        <Card className="content__card projectCard" title={props.card.title}>
            <div className="card-body-top">
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
                <div className="addItem">
                    <Button className="addItemBtn" onClick={(e) => handleAddClick(e)}>
                        +
                    </Button>
                    <Modal className="newItemModal" visible={isItemModalVisible} onOk={(e) => handleAddItem(e)} onCancel={() => setIsItemModalVisible(false)}>
                        <Input
                        value={itemInputValue} 
                        addonBefore="Item name"
                        onChange={(e) => setItemInputValue(e.target.value)}
                        placeholder="Add your item's name"
                        ref={addItemFieldRef}
                        id="newItemField"
                        onKeyDown={(e) => handleEnterClick(e)} />
                    </Modal>
                </div>
            </div>
            <div className="cardBottomBtns card-body-bottom">
                <Button className="cardBottomBtns-deleteBtn" onClick={(e) => handleDeleteCardClick(e)}> Delete </Button>
                <Button className="cardBottomBtns-editBtn" onClick={(e) => handleEditClick(e)}>Edit</Button>
            </div>
            <EditCard 
              isModalVisible={isModalVisible} 
              setIsModalVisible={setIsModalVisible} 
              card={props.card}
              cards={props.cards}
              cardsFunction={props.cardsFunction} />
        </Card>
    )
}

export default SingleCard