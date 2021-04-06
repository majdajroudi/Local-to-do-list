import React,{useState} from "react"
import {Card, Input, Typography, Button} from "antd"
import "./index.css"

function EmptyCard(props) {
    const [titleValue, setTitleValue] = useState("")
    const {Title} = Typography;

    const TitleInput = (
            <Title>
                <Input 
                    value={titleValue} 
                    placeholder="Project's title"
                    className="content__card"
                    onChange={(e) => {setTitleValue(e.target.value)}} />
            </Title>
        )

    const handleCancelClick = () => {
        props.addingCardFunction(false)
    }

    const handleConfirmClick = () => {
        const cardsCopy = [...props.cards]
        const capitalizedTitle = titleValue.charAt(0).toUpperCase() + titleValue.slice(1)
        cardsCopy.push({title: capitalizedTitle, items: [], category: ""})
        props.cardsFunction(cardsCopy)
        props.addingCardFunction(false)
    }

    return(
        <Card className="content__card" title={TitleInput}>
            <div className="addItem">
                <Button className="addItemBtn">
                    +
                </Button>
            </div>
            <div className="addCard">
                <Button className="addCard--cancelBtn" onClick={() => handleCancelClick()}>
                    Cancel
                </Button>
                <Button className="addCard--confirmBtn" onClick={() => handleConfirmClick()}>
                    Confirm
                </Button>
            </div>
        </Card>
    )
}

export default EmptyCard;